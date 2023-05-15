import { Request, Response, NextFunction, Router }  from "express";

export interface IControllerRoute {
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    //method: 'get' | 'post' | 'delete' | 'patch' | 'put',
    method: keyof Pick<Router, 'post' | 'get' | 'delete'| 'patch' | 'put'>
}