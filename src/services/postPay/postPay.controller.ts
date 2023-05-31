import { NextFunction, Request, Response } from "express"
import Controller from "../controller"
import { Exception400 } from "../../utils/exception"
import PostPay from "./postPay.entity"
import PostPayModel from "./postPay.model"

class PostPayController extends Controller {

    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, PostPay, PostPayModel)
    }


    public add = async () => {
        const body = this.body

        const postpay = await (this.model as PostPayModel).create(body)
        if (!postpay?.id) throw new Exception400("Failed to add postpay")

        this.success200(postpay)
    }


    public getAll = async () => {

        const data = await (this.model as PostPayModel).getAll()

        this.success200(data);
    }

}

export default PostPayController