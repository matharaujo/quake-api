import express from 'express';

export default (application: express.Express): void => {
  const router = express.Router();

  application.use('/', router);
};
