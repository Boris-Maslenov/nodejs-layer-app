import  express, {Express} from 'express';
// import { userRouter } from './users/users.js';
import { Server } from 'http';
import { LoggerService } from './logger/logger.services';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';

class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerService;
    userController: UserController;
    exeptionFilter: ExeptionFilter;

    constructor(logger: LoggerService, 
                userController: UserController, 
                exeptionFilter: ExeptionFilter){
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    useRoutes(){
        this.app.use('/users', this.userController.router);
    }

    useExeptionFilters(){
        console.log('useExeptionFilters');
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    async init(){
        this.useRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log('Сервер успешно запущен');
    }
}

export {App};