// ai/dto/generate-content.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class GenerateContentDto {
  @IsString()
  keyword: string;

  @IsString()
  channelDescription: string;

  @IsOptional()
  @IsString()
  timeRange?: string = '24';
}