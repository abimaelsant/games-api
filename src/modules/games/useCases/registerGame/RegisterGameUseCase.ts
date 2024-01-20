import { injectable, inject } from 'tsyringe';
import { IGameDTO } from '../../infra/entities/Game';
import { IGameRepository } from '../../infra/repositories/IGameRepository';

@injectable()
class RegisterGameUseCase {
    constructor(
        @inject('GameRepository')
        private readonly gameRepository: IGameRepository
    ) {}

    async execute({ name, designer, developer, genre, mode, platform, releaseData }: IGameDTO): Promise<void> {
        if(releaseData === '1980') {
            throw new Error('Release date not authorized!');
        }
        await this.gameRepository.register({ name, designer, developer, genre, mode, platform, releaseData });
    }
}

export { RegisterGameUseCase };