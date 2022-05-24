import express from 'express';

import initializeEnvironment from './environment';
import initializeMiddlewares from './middlewares';
import initializeRouter from './router';

class Application {
  private application: express.Express;

  public constructor() {
    this.application = express();
  }

  public initialize(): void {
    initializeEnvironment();
    initializeMiddlewares(this.application);
    initializeRouter(this.application);

    this.application.listen(process.env.PORT_API, () =>
      console.log(`Server running at http://localhost:${process.env.PORT_API}/`)
    );
  }
}

export default Application;
