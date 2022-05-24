import express from 'express';

import initializeRouter from '../../../../src/infrastructure/configurations/router';

describe('[Infrastructure / Configurations] - Router', (): void => {
  test('[initializeRouter] - Should initialize router', async (): Promise<void> => {
    jest.spyOn(express, 'Router');

    const application = express();

    initializeRouter(application);

    expect(express.Router).toBeCalled();
  });
});
