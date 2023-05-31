import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import Emi from "./emi.entity"
import EmiModel from "./emi.model"
import { Exception400 } from "../../utils/exception"

class EmiController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Emi, EmiModel)
    }


    public addEmi = async () => {
        const body = this.body

        const newEmi = await (this.model as EmiModel).addEmi(body)
        if (!newEmi.id) throw new Exception400("Failed to add emi")

        this.success200(body)
    }


    public getAllEmi = async () => {

        const emis = await (this.model as EmiModel).getAllEmi()

        this.success200(emis);
    }

}

export default EmiController