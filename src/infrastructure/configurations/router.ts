import express from 'express';

import GameRouter from '../../application/use-cases/game/game-router';

export default (application: express.Express): void => {
  const router = express.Router();

  application.use('/api', router);

  GameRouter(router);
};
