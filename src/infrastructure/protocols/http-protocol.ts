type HttpProtocol<T = any> = {
  statusCode: number;
  body: T;
};

export default HttpProtocol;
