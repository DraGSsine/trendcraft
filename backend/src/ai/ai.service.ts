import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/model/UserSchema';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai: any;
  private trendCache: { trends: any; timestamp: number } | null = null;
  private readonly CACHE_DURATION = 1 * 60 * 60 * 1000; // 1 hour cache

  constructor(
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  private async getTrends(timeRange: number, niche: string) {
    const currentTime = Date.now();

    if (
      this.trendCache &&
      currentTime - this.trendCache.timestamp < this.CACHE_DURATION
    ) {
      return this.trendCache.trends;
    }

    try {
      const serperApiKey = this.configService.get<string>('SERP_API_KEY');
      const url = `https://serpapi.com/search.json?engine=google_trends_trending_now&geo=US&hours=${timeRange}&hl=en&api_key=${serperApiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      const trends = data.trending_searches.map((trend: any) => ({
        topic: trend.query,
        relatedQueries: trend.trend_breakdown?.slice(0, 3) || [],
        category:
          trend?.categories?.map((c: any) => c.name.toLowerCase()) || [],
      }));

      this.trendCache = {
        trends,
        timestamp: currentTime,
      };
      // Filter trends based on the niche and return top 5
      if (niche.toLocaleLowerCase() === 'all') return trends.slice(0, 5);
      const filteredTrends = trends.filter((trend: any) =>
        trend.category.includes(niche.toLocaleLowerCase()),
      );
      if (filteredTrends.length === 0)
        throw new Error('No trends found for the specified niche');
      return filteredTrends.slice(0, 5);
    } catch (error) {
      console.error('Error fetching trends:', error);
      throw new Error('Failed to fetch trending topics');
    }
  }

  async generateContentIdeas(
    platform: string,
    niche: string,
    timeRange: number,
    userId: string,
  ) {
    try {
      const trends = await this.getTrends(timeRange, niche);

      const prompt = `As a content strategist for ${platform}, analyze these current trends and develop three content ideas for an influencer in the ${niche} niche:

Current Trends:
${JSON.stringify(trends, null, 2)}

Create three content pieces that:
1. Connect one specific trend to the ${niche} niche
2. Are optimized for ${platform}'s best practices
3. Have viral potential with engaging hooks
4. Target the ${niche} audience

Respond ONLY with a valid JSON array containing exactly three content ideas in this format:
[
  {
    "contentType": "post/video/reel/story",
    "title": "Catchy title connecting the trend to ${niche}",
    "hook": "Attention-grabbing opening that mentions the trend",
    "description": "Detailed content description showing how the trend relates to ${niche}",
    "trendConnection": "Explicit explanation of how this content connects to [specific trend]",
    "hashtags": ["Trend-related tag", "Niche-related tag", "Platform-specific tag"],
    "estimatedEngagement": "HIGH/MEDIUM/LOW"
  }
]`;

      // Call the OpenAI Chat Completion endpoint
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are a content strategist for a social media platform.',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      });

      // Extract the text response from the OpenAI API response
      const content = completion.choices[0].message?.content;
      if (!content) {
        throw new Error('No content received from OpenAI');
      }

      // Clean and parse the JSON response (strip markdown formatting if present)
      const cleanJson = content
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
      console.log('cleanJson', cleanJson);
      const parsedContent = JSON.parse(cleanJson);

      // Update user credits
      await this.userModel.updateOne({ _id: userId }, { $inc: { credits: 1 } });
      return parsedContent;
    } catch (error) {
      console.error('Content Generation Error:', error);
      throw new Error('Failed to generate content ideas');
    }
  }
}
