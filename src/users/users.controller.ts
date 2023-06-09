import {Request, Response, NextFunction} from 'express';
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.services";
import { HTTPError } from '../errors/http.error';

export class UserController extends BaseController {
    constructor(logger: LoggerService){
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login }
        ]);
    }
    login(req: Request, res: Response, next: NextFunction){
        //this.ok(res, 'login');
        next(new HTTPError(401, 'Ошибка авторизации', '[Login]'));
    }
    register(req: Request, res: Response, next: NextFunction){
        this.ok(res, 'register');
    }
}