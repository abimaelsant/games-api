import { IGameDTO } from '../../infra/entities/Game';
import { IGameRepository } from '../../infra/repositories/IGameRepository';
import { RegisterGameUseCase } from './RegisterGameUseCase';

const RegisterGameUseCaseMock = RegisterGameUseCase as jest.Mock<RegisterGameUseCase>;

describe('Register Game Use Case', () => {
    let sut: RegisterGameUseCase;
    const data: IGameDTO = {
        name: 'Super Mario Bros',
        designer: 'Shigeru Miyamoto',
        developer: 'Nintendo',
        genre: 'Platform',
        mode: 'Single-player',
        platform: 'Nintendo Entertainment System',
        releaseData: '1981'
    };
    
    const GameRepositoryMock: IGameRepository = {
        register: jest.fn().mockResolvedValueOnce({})
    };

    beforeEach(() => {
        sut = new RegisterGameUseCaseMock(GameRepositoryMock);
    });

    it('should be able to return and error if releaseData equals 1980', async () => {
        const dataError: IGameDTO = { ...data, releaseData: '1980' };
        const response = sut.execute(dataError);
        await expect(response).rejects.toThrow();
    });
    
    it('should be able to register a new game', async () => {
        const response = await sut.execute(data);
        expect(response).toBeUndefined();
    });
});