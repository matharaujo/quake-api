import Http from '../../../src/infrastructure/helpers/http';
import RouterAdapter from '../../../src/infrastructure/adapters/router-adapter';

import HttpProtocol from '../../../src/infrastructure/protocols/http-protocol';

describe('[Infrastructure / Adapters] - Router Adapter', (): void => {
  test('[adapt] - Should return httpResponse', async () => {
    class MockRouter {
      public static async route(): Promise<HttpProtocol> {
        return Http.ok({});
      }
    }

    const adapt = RouterAdapter.adapt(MockRouter.route);

    const json = jest.fn();
    const status = jest.fn().mockReturnValueOnce({
      json,
    });

    await adapt({}, { status });

    expect(status).toHaveBeenCalledWith(200);
  });
});
