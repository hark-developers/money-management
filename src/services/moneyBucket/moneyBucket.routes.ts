import { NextFunction, Request, Response } from "express";
import { Method, Roles, Route } from "../../types/route";
import MoneyBucketController from "./moneyBucket.controller";

const moneyBucketRoute: Route[] = [
    {
        path: '/money-bucket',
        method: Method.post,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new MoneyBucketController(req, res, next).add();
        }
    },
    {
        path: '/money-bucket',
        method: Method.get,
        access: [Roles.user],
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new MoneyBucketController(req, res, next).getAll();
        }
    },
]

export default moneyBucketRoute