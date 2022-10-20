import express, { Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json('pong');
});

export default app;
