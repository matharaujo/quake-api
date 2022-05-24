import express from 'express';

import GameRouter from '../../application/use-cases/game/game-router';

export default (application: express.Express): void => {
  const router = express.Router();

  application.use('/api', router);

  GameRouter(router);

  application.use(
    '*',
    (request: express.Request, response: express.Response): void => {
      response.status(404).json({
        error: 'Oops! An error has occurred!',
        message: `Apparently this route ${request.originalUrl} not-exists!`,
      });
    }
  );
};
