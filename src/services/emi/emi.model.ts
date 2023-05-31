import { getRepository } from "typeorm";
import Model from "../model";
import Emi from "./emi.entity";

class EmiModel extends Model {

    constructor() {
        super(Emi);
    }

    public addEmi = async (emiData: Emi) => {
        await this.repository.create(emiData)
        const emi = await this.repository.save(emiData)

        return emi
    }

    public getAllEmi = async () => {
        const emis = await this.repository.find()

        return emis
    }

}

export default EmiModel