type HttpResponse<T = any> = {
  statusCode: number;
  body: T;
};

class Http {
  public static ok(body: any): HttpResponse {
    return {
      statusCode: 200,
      body,
    };
  }

  public static badRequest(error: Error): HttpResponse {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  public static serverError(error: Error): HttpResponse {
    return {
      statusCode: 500,
      body: {
        error: error.message,
      },
    };
  }
}

export default Http;
