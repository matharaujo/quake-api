import Http from '../../../../src/infrastructure/helpers/http';

import HttpProtocol from '../../../../src/infrastructure/protocols/http-protocol';

describe('[Infrastructure / Helpers] - Http', (): void => {
  test('[ok] - Should return httpResponse', async (): Promise<void> => {
    const body = { message: 'test' };
    const response: HttpProtocol = Http.ok(body);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(body);
  });

  test('[serverError] - Should return httpResponse', async (): Promise<void> => {
    const error = new Error('error');
    const response: HttpProtocol = Http.serverError(error);

    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({
      error: 'Oops! An error has occurred!',
      message: error.message,
    });
  });
});
