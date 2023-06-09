import { NextFunction, Response, Request } from "express";
import { HTTPError } from "./http.error";

export interface IExeptionFilter {
    catch: (err: Error | HTTPError, req: Request, res: Response, next: NextFunction) => void
}