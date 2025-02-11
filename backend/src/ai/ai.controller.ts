// ai/ai.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { GenerateContentDto } from './dto/generate-content.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate')
  async generateContent(
    @Body() generateContentDto: GenerateContentDto
  ): Promise<any> {
    return this.aiService.generateContent(generateContentDto);
  }
}