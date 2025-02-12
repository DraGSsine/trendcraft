// ai/ai.controller.ts
import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { SubscriptionGuard } from 'src/guards/subscription.guard';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate')
  @UseGuards(JwtAuthGuard,SubscriptionGuard)
  async generateContent(
    @Req() req,
    @Body() generateContentDto: GenerateContentDto
  ): Promise<any> {
    const { platform, niche, timeRange } = generateContentDto;
    return this.aiService.generateContentIdeas(platform, niche, timeRange,req.user.id);
  }
}