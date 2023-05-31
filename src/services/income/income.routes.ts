import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import IncomeController from "./income.controller";

const incomeRoute: Route[] = [
    {
        path: '/income',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new IncomeController(req, res, next).addIncome();
        }
    },
    {
        path: '/income',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new IncomeController(req, res, next).getAllIncome();
        }
    },
    {
        path: '/income/types',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new IncomeController(req, res, next).getAllIncomeTypes();
        }
    },
]

export default incomeRoute