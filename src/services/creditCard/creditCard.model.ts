import { getRepository } from "typeorm";
import Model from "../model";
import CreditCard from "./creditCard.entity";

class CreditCardModel extends Model {

    constructor() {
        super(CreditCard);
    }

    public create = async (data: CreditCard) => {
        await this.repository.create(data)
        const newData = await this.repository.save(data)

        return newData
    }

    public getAll = async () => {
        const emis = await this.repository.find()

        return emis
    }

}

export default CreditCardModel