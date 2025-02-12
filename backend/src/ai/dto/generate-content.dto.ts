// ai/dto/generate-content.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class GenerateContentDto {
  @IsString()
  platform: string;

  @IsString()
  niche: string;

  @IsNumber()
  timeRange: number;
}
