import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import SavingTargetController from "./savingTarget.controller";

const savingTargetRoute: Route[] = [
    {
        path: '/saving-target',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SavingTargetController(req, res, next).add();
        }
    },
    {
        path: '/saving-target/:id',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SavingTargetController(req, res, next).getOne();
        }
    },
]

export default savingTargetRoute