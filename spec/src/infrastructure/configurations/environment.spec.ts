import dotenv from 'dotenv';

import initializeEnvironment from '../../../../src/infrastructure/configurations/environment';

describe('[Infrastructure / Configurations] - Environment', (): void => {
  test('[initializeMiddlewares] - Should initialize environment', async (): Promise<void> => {
    jest.spyOn(dotenv, 'config');

    initializeEnvironment();

    expect(dotenv.config).toBeCalled();
  });
});
