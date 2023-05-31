import { Repository, getRepository } from "typeorm";
import Model from "../model";
import SavingTarget from "./savingTarget.entity";

class SavingTargetModel extends Model {

    constructor() {
        super(SavingTarget);
    }

    public create = async (data: SavingTarget) => {
        await this.repository.create(data)
        const newData = await this.repository.save(data)

        return newData
    }

    public getOne = async (id: number) => {
        return await (this.repository as Repository<any>).findOne({ where: { id } })
    }

}

export default SavingTargetModel