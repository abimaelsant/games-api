import { Router } from 'express';

import registerGameRouter from './register-game.routes';

const router = Router();

router.use('/register-games', registerGameRouter);

export default router;