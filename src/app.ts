import  express, {Express} from 'express';
import { userRouter } from './users.js';
import { Server } from 'http';

class App {
    app: Express;
    port: number;
    server: Server;

    constructor(){
        this.app = express();
        this.port = 8000;
    }
    useRoutes(){
        this.app.use('/users', userRouter);
    }
    async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        console.log('Сервер успешно запущен');
    }
}

export {App};