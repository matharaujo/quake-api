import express from 'express';
import cors from 'cors';

import initializeMiddlewares from '../../../../src/infrastructure/configurations/middlewares';

describe('[Infrastructure / Configurations] - Middlewares', (): void => {
  test('[initializeMiddlewares] - Should initialize middlewares', async (): Promise<void> => {
    jest.spyOn(express, 'json');

    const application = express();

    initializeMiddlewares(application);

    expect(express.json).toBeCalled();
    expect(cors).toBeTruthy();
  });
});
