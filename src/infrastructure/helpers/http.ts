import HttpProtocol from '../protocols/http-protocol';

class Http {
  public static ok(body: any): HttpProtocol {
    return {
      statusCode: 200,
      body,
    };
  }

  public static badRequest(error: Error): HttpProtocol {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  public static serverError(error: Error): HttpProtocol {
    return {
      statusCode: 500,
      body: {
        error: error.message,
      },
    };
  }
}

export default Http;
