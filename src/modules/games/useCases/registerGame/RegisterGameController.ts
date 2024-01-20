import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IGameDTO } from '../../infra/entities/Game';
import { RegisterGameUseCase } from './RegisterGameUseCase';

class RegisterGameController {
    constructor() {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, designer, developer, releaseData, genre, mode, platform }: IGameDTO = request.body;

        const registerUseCase = container.resolve(RegisterGameUseCase);
        await registerUseCase.execute({ name, designer, developer, releaseData, genre, mode, platform });

        return response.status(201).send({ message: 'Registro criado com sucesso!' });
    }
}

export { RegisterGameController };