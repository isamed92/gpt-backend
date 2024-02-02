import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  // SOLO LLAMARA CASOS DE USO

  async orthographyCheck() {
    return await orthographyCheckUseCase();
  }
}
