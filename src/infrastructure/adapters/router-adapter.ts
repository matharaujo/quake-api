import express from 'express';

import HttpProtocol from '../protocols/http-protocol';

class RouterAdapter {
  public static adapt(router: () => any): any {
    return async (
      request: express.Request,
      response: express.Response
    ): Promise<express.Response> => {
      const httpResponse: HttpProtocol = await router();

      return response.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}

export default RouterAdapter;
