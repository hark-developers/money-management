import { getRepository } from "typeorm";
import Model from "../model";
import PostPay from "./postPay.entity";

class PostPayModel extends Model {

    constructor() {
        super(PostPay);
    }

    public create = async (data: PostPay) => {
        await this.repository.create(data)
        const newData = await this.repository.save(data)

        return newData
    }

    public getAll = async () => {
        const emis = await this.repository.find()

        return emis
    }

}

export default PostPayModel