import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import EmiController from "./emi.controller";

const emiRoute: Route[] = [
    {
        path: '/emi',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new EmiController(req, res, next).addEmi();
        }
    },
    {
        path: '/emi',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new EmiController(req, res, next).getAllEmi();
        }
    },
]

export default emiRoute