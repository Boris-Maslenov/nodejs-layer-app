import express, {Request, Response, NextFunction} from 'express';
import { userRouter } from './users.js';

const port = 8000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Время ", Date.now());
    next();
});

app.get('/hellow', (req: Request, res: Response) => {
    throw new Error('Error!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(401).send(err.message);
});

app.listen(port, () => {
    console.log('Сервер запущен на' + port + 'порту');
});