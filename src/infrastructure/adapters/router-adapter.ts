import express from 'express';

class RouterAdapter {
  public static adapt(router: () => any): any {
    return async (request: express.Request, response: express.Response) => {
      const httpResponse = await router();

      response.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}

export default RouterAdapter;
