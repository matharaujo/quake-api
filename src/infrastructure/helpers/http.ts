import HttpProtocol from '../protocols/http-protocol';

class Http {
  public static ok(body: any): HttpProtocol {
    return {
      statusCode: 200,
      body,
    };
  }

  public static serverError(error: Error): HttpProtocol {
    return {
      statusCode: 500,
      body: {
        error: 'Oops! An error has occurred!',
        message: error.message,
      },
    };
  }
}

export default Http;
