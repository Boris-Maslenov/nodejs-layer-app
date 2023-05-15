import { LoggerService } from "../logger/logger.services";
import { Router, Response } from 'express';
import {IControllerRoute} from './route.interface';

abstract class BaseController {
    private readonly _router: Router;
    private logger: LoggerService;
    constructor( logger: LoggerService ){
       this._router = Router();
       this.logger = logger;
    }
    get router(){
        return this._router;
    }
    send<T>(res: Response, code: number, message: T){
        res.type('application/json');
        return res.status(code).json(message);
    }
    created(res: Response){
        return res.sendStatus(201);
    }
    ok<T>(res: Response, message: T){
        return this.send<T>(res, 200, message);
    }
    protected bindRoutes(routes: IControllerRoute[]){
        for(let route of routes){
            this.logger.log(`[${route.method}] ${route.path}`);
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}

export { BaseController };