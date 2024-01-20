import prismaClient from '../../../../shared/infra/prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  public async register({ name, designer, genre, mode, releaseData, platform, developer }: IGameDTO): Promise<void> {
    await prismaClient.game.create({
      data: {
        name,
        designer,
        genre,
        mode,
        releaseDate: releaseData,
        platform,
        developer
      }
    });
  }
}

export { GameRepository };
