import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Income from "./income.entity";

@Entity("incomeType")
class IncomeType {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "varchar",
        nullable: false
    })
    public name: string

    @ManyToOne(() => Income, (income: Income) => income.type)
    public income: number | Income

}

export default IncomeType;