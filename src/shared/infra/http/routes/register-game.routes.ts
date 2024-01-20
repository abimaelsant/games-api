import { celebrate } from 'celebrate';
import { Router } from 'express';
import { RegisterGameController } from '../../../../modules/games/useCases/registerGame/RegisterGameController';
import { registerGameValidator } from '../../../validators/RegisterGameValidator';

const router = Router();

const registerGameController = new RegisterGameController();

router.post('/', celebrate(registerGameValidator), registerGameController.handle);

export default router;

