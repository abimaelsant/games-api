import { randomUUID } from 'crypto';

export interface IGameDTO {
  id?: string;
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

class Game {
  id?: string;

  name!: string;

  designer!: string;

  genre!: string;

  platform!: string;

  developer!: string;

  releaseData!: string;

  mode!: string;

  createdAt!: Date;

  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { Game };
