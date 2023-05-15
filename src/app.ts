import  express, {Express} from 'express';
import { userRouter } from './users/users.js';
import { Server } from 'http';
import { LoggerService } from './logger/logger.services';
import { UserController } from './users/users.controller';

class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerService;
    userController: UserController;

    constructor(logger: LoggerService, userController: UserController){
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
    }

    useRoutes(){
        this.app.use('/users', this.userController.router);
    }
    
    async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log('Сервер успешно запущен');
    }
}

export {App};