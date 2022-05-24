import express from 'express';
import cors from 'cors';

export default (application: express.Express): void => {
  application.use(express.json());
  application.use(cors());
};
