import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @OneToMany(() => Income, (income: Income) => income.type)
    public income: number | Income

}

export default IncomeType;