// ai/ai.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GenerateContentDto } from './dto/generate-content.dto';

@Injectable()
export class AiService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private globalTrendCache: { trends: any; timestamp: number } | null = null;
  private readonly ONE_DAY = 24 * 60 * 60 * 1000;

  constructor(private configService: ConfigService) {
    this.genAI = new GoogleGenerativeAI(
      this.configService.get<string>('GEMINI_API_KEY')!
    );
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  private async fetchTrendingTopics(timeRange: string) {
    const currentTime = Date.now();

    if (
      timeRange === '24' &&
      this.globalTrendCache &&
      currentTime - this.globalTrendCache.timestamp < this.ONE_DAY
    ) {
      return this.globalTrendCache.trends;
    }

    try {
      const serperApiKey = this.configService.get<string>('SERP_API_KEY');
      const url = `https://serpapi.com/search.json?engine=google_trends_trending_now&hours=${timeRange}&api_key=${serperApiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      const trends = data.trending_searches.map((trend: any) => ({
        title: trend.query,
        relatedQueries: trend.trend_breakdown?.slice(0, 5) || [],
        categories: trend?.categories?.map((cat: any) => cat?.name) || [],
      }));

      if (timeRange === '24') {
        this.globalTrendCache = {
          trends,
          timestamp: currentTime,
        };
      }

      return trends;
    } catch (error) {
      console.error('Trending Topics Error:', error);
      throw new Error('Failed to fetch trending topics');
    }
  }

  private async generateContentIdeas(
    keyword: string,
    channelDescription: string,
    trends: any[]
  ) {
    const prompt = `
    As a YouTube content strategist, create a video content plan that combines the keyword "${keyword}" with current trends and the channel's focus: "${channelDescription}".

    Current trending topics:
    ${trends.map((t) => `- ${t.title} (Related: ${t.relatedQueries.join(', ')})`).join('\n')}

    Create a detailed video content plan that includes:
    1. An attention-grabbing title (under 60 characters)
    2. An engaging description (120-150 characters)
    3. A complete video script (minimum 500 words)
    4. 5 relevant hashtags
    5. Estimated view potential (number)
    6. Competition level (LOW/MEDIUM/HIGH)
    7. 3 hook ideas
    8. Thumbnail text suggestion
    9. Search volume estimate (1-100)

    Response format:
    {
      "title": "string",
      "description": "string",
      "script": "string",
      "hashtags": ["string"],
      "trendingTopics": ["string"],
      "searchVolume": number,
      "estimatedViews": number,
      "competitionLevel": "string",
      "suggestedThumbnailText": "string",
      "hooks": ["string"]
    }`;

    try {
      const result = await this.model.generateContent(prompt);
      const content = result.response.text();
      return JSON.parse(
        content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      );
    } catch (error) {
      console.error('Content Generation Error:', error);
      throw new Error('Failed to generate content ideas');
    }
  }

  async generateContent(
    generateContentDto: GenerateContentDto
  ): Promise<any> {
    try {
      const { keyword, channelDescription, timeRange } = generateContentDto;

      // Fetch trending topics
      const trends = await this.fetchTrendingTopics(timeRange || '24');

      // Generate content ideas
      const contentIdeas = await this.generateContentIdeas(
        keyword,
        channelDescription,
        trends
      );

      return contentIdeas;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error(`Content generation failed: ${error.message}`);
    }
  }
}
