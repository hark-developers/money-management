import { Repository, getRepository } from "typeorm";
import Model from "../model";
import MoneyBucket from "./moneyBucket.entity";

class MoneyBucketModel extends Model {

    constructor() {
        super(MoneyBucket);
    }

    public create = async (data: MoneyBucket) => {
        await this.repository.create(data)
        const newData = await this.repository.save(data)

        return newData
    }

    public getAll = async () => {
        return await (this.repository as Repository<any>).find()
    }

}

export default MoneyBucketModel