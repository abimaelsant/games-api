import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import '../../container';
import { CelebrateError } from 'celebrate';

const port = 5000;

const app = express();

app.use(express.json());
app.use(routes);
//eslint-disable-next-line @typescript-eslint/no-unused-vars 
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof CelebrateError) {
    return response.status(400).json({
      error: 'Validation fails',
      messages: err.details.get('body')?.details.map(({ message }) => message)
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  }); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
