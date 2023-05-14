import  express, {Express} from 'express';
import { userRouter } from './users.js';
import { Server } from 'http';
import { LoggerService } from './logger/logger.services.js';

class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerService;

    constructor(logger: LoggerService){
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }
    useRoutes(){
        this.app.use('/users', userRouter);
    }
    async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log('Сервер успешно запущен');
    }
}

export {App};