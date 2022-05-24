import express from 'express';

import RouterAdapter from '../../../../../src/infrastructure/adapters/router-adapter';

import Router from '../../../../../src/application/use-cases/game/game-router';
import Controller from '../../../../../src/application/use-cases/game/game-controller';

describe('[Application / Use Cases] - Game Router', (): void => {
  test('[initializeRouter] - Should initialize router', async (): Promise<void> => {
    jest.spyOn(express, 'Router');
    jest.spyOn(RouterAdapter, 'adapt');

    const router = express.Router();

    Router(router);

    expect(express.Router).toBeCalled();
    expect(RouterAdapter.adapt).toBeCalledWith(Controller.findGames);
  });
});
