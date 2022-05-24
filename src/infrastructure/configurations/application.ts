import express from 'express';

import initializeEnvironment from './environment';
import initializeMiddlewares from './middlewares';
import initializeRouter from './router';

export default (): void => {
  const application = express();

  initializeEnvironment();
  initializeMiddlewares(application);
  initializeRouter(application);

  application.listen(process.env.PORT_API, () =>
    console.log(`Server running at http://localhost:${process.env.PORT_API}/`)
  );
};
