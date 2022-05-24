import express from 'express';

import initializeMiddlewares from './middlewares';
import initializeRouter from './router';

class Application {
  private application: express.Express;
  private port: number;

  public constructor() {
    this.application = express();
    this.port = 3000;
  }

  public initialize(): void {
    initializeMiddlewares(this.application);
    initializeRouter(this.application);

    this.application.listen(this.port, () =>
      console.log(`Server running at http://localhost:${this.port}/`)
    );
  }
}

export default Application;
