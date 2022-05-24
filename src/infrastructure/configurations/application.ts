import express from 'express';

import initializeEnvironment from './environment';
import initializeMiddlewares from './middlewares';
import initializeRouter from './router';

export default (): void => {
  const application = express();

  initializeEnvironment();
  initializeMiddlewares(application);
  initializeRouter(application);

  const port = process.env.PORT_API || 8000;
  application.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
  );
};
