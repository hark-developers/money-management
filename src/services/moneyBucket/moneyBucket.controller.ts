import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import { Exception400, Exception404 } from "../../utils/exception"
import MoneyBucketModel from "./moneyBucket.model"
import MoneyBucket from "./moneyBucket.entity"

class MoneyBucketController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, MoneyBucket, MoneyBucketModel)
    }

    public add = async () => {
        const body = this.body

        const newData = await (this.model as MoneyBucketModel).create(body)
        if (!newData?.id) throw new Exception400("Failed to add emi")

        this.success200(body)
    }

    public getAll = async () => {
        const data = await (this.model as MoneyBucketModel).getAll()

        this.success200(data);
    }

}

export default MoneyBucketController