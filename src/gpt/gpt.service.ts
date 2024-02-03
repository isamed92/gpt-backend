import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openIa = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  // SOLO LLAMARA CASOS DE USO

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openIa, {
      prompt: orthographyDto.prompt,
    });
  }
}
