import express from 'express';

class Application {
  private application: express.Express;
  private port: number;

  public constructor() {
    this.application = express();
    this.port = 3000;
  }

  public initialize(): void {
    this.application.listen(this.port, () =>
      console.log(`Server running at http://localhost:${this.port}/`)
    );
  }
}

export default Application;
