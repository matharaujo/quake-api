import express from 'express';

import RouterAdapter from '../../../infrastructure/adapters/router-adapter';

import Controller from './game-controller';

export default (router: express.Router): void => {
  router.get('/', RouterAdapter.adapt(Controller.findGames));
};
