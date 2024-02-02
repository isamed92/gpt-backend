import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';

@Injectable()
export class GptService {
  // SOLO LLAMARA CASOS DE USO

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase({ prompt: orthographyDto.prompt });
  }
}
