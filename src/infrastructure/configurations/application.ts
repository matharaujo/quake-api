import express from 'express';

import initializeEnvironment from './environment';
import initializeMiddlewares from './middlewares';
import initializeRouter from './router';

export default (): void => {
  const application = express();

  initializeEnvironment();
  initializeMiddlewares(application);
  initializeRouter(application);

  application.use(
    '*',
    (request: express.Request, response: express.Response) => {
      response.status(404).send({
        error: 'Oops! An error has occurred!',
        message: `Apparently this route ${request.originalUrl} does not exist!`,
      });
    }
  );

  const port = process.env.PORT_API || 8000;
  application.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
  );
};
