import { NextFunction, Response, Request } from "express";
import { LoggerService } from "../logger/logger.services";
import { IExeptionFilter } from "./exeption.filter.interface";
import { HTTPError } from "./http.error";

export class ExeptionFilter implements IExeptionFilter{
    logger: LoggerService;
    constructor(logger: LoggerService){
        this.logger = logger;
    }
    catch(err: Error, req: Request, res: Response, next: NextFunction) {
        if(err instanceof HTTPError) {
            this.logger.error(`[${err.context}] Ошибка ${err.statusCode} : `);
            res.status(err.statusCode).send({err: err.message});
        } else {
            this.logger.error(`${err.message}`);
            res.status(500).send({err: err.message});
        }
    }
}