import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import { Exception400, Exception404 } from "../../utils/exception"
import SavingTarget from "./savingTarget.entity"
import SavingTargetModel from "./savingTarget.model"

class SavingTargetController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, SavingTarget, SavingTargetModel)
    }

    public add = async () => {
        const body = this.body

        const newData = await (this.model as SavingTargetModel).create(body)
        if (!newData?.id) throw new Exception400("Failed to add emi")

        this.success200(body)
    }

    public getOne = async () => {
        const id = this.params.id

        const data = await (this.model as SavingTargetModel).getOne(id)
        if (!data?.id) throw new Exception404("Not found")

        this.success200(data);
    }

}

export default SavingTargetController