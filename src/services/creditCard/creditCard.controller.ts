import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import { Exception400 } from "../../utils/exception"
import CreditCard from "./creditCard.entity"
import CreditCardModel from "./creditCard.model"

class CreditCardController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, CreditCard, CreditCardModel)
    }


    public add = async () => {
        const body = this.body

        const creditCard = await (this.model as CreditCardModel).create(body)
        if (!creditCard.id) throw new Exception400("Failed to add emi")

        this.success200(body)
    }


    public getAll = async () => {

        const emis = await (this.model as CreditCardModel).getAll()

        this.success200(emis);
    }

}

export default CreditCardController