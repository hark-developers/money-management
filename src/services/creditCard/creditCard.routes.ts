import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import CreditCardController from "./creditCard.controller";

const creditCardRoute: Route[] = [
    {
        path: '/credit-card',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CreditCardController(req, res, next).add();
        }
    },
    {
        path: '/credit-card',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CreditCardController(req, res, next).getAll();
        }
    },
]

export default creditCardRoute