import { FindManyOptions, Repository, getRepository } from "typeorm";
import Model from "../model";
import Income from "./income.entity";
import IncomeType from "./income.type.entity";

class IncomeModel extends Model {

    constructor() {
        super(Income);
    }

    public addIncome = async (incomeData: Income) => {
        await this.repository.create(incomeData)
        const income = await this.repository.save(incomeData)

        return income
    }

    public getAllIncome = async () => {
        const incomes = await this.repository.find()

        return incomes
    }

    public getAllIncomeTypes = async () => {
        const incomeTypes = await getRepository(IncomeType).find()

        console.log('incomeTypes', incomeTypes)

        return incomeTypes
    }
}

export default IncomeModel