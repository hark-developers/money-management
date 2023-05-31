import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import PostPayController from "./postPay.controller";

const postPayRoute: Route[] = [
    {
        path: '/postpay',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new PostPayController(req, res, next).add();
        }
    },
    {
        path: '/postpay',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new PostPayController(req, res, next).getAll();
        }
    },
]

export default postPayRoute