import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import IncomeModel from "./income.model"
import Income from "./income.entity"
import { Exception400 } from "../../utils/exception"

class IncomeController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Income, IncomeModel)
    }

    public addIncome = async () => {
        const body = this.body

        const newIncome = await (this.model as IncomeModel).addIncome(body)
        if (!newIncome.id) throw new Exception400("Failed to add income")

        this.success200(body)
    }

    public getAllIncome = async () => {

        const incomeTypes = await (this.model as IncomeModel).getAllIncome()

        this.success200(incomeTypes);
    }

    public getAllIncomeTypes = async () => {

        const incomeTypes = await (this.model as IncomeModel).getAllIncomeTypes()

        this.success200(incomeTypes);
    }

}

export default IncomeController;