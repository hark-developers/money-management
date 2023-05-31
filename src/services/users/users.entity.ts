import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Income from "../income/income.entity";
import Emi from "../emi/emi.entity";
import CreditCard from "../creditCard/creditCard.entity";
import PostPay from "../postPay/postPay.entity";
import SavingTarget from "../savingTarget/savingTarget.entity";
import MoneyBucket from "../moneyBucket/moneyBucket.entity";

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "enum",
        enum: ["active", "inactive"],
        default: "active"
    })
    public status: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    public full_name: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public country_code: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public mobile: string;

    @Column({
        type: "varchar",
        nullable: true,
        unique: true,
    })
    public email: string;

    @Column({
        select: false,
        type: "varchar",
        nullable: true
    })
    public password: string | null;

    @Column({
        select: false,
        type: "varchar",
        default: 'user'
    })
    public role: string[];

    @Column({
        type: "timestamptz",
        nullable: true
    })
    public dob: Date;

    @Column({
        type: "enum",
        enum: ["m", "f", "o"],
        nullable: true,
    })
    public gender: string;

    @Column()
    @CreateDateColumn({
        type: "timestamptz",
        default: () => `timezone('utc', now())`
    })
    public created_at: Date;

    @Column()
    @UpdateDateColumn({
        type: "timestamptz",
        default: () => `timezone('utc', now())`
    })
    public updated_at: Date;

    @DeleteDateColumn({
        type: "date",
        nullable: true
    })
    public deleted_on: Date

    @OneToMany(() => Income, (income: Income) => income.user)
    public income: number | Income

    @OneToMany(() => Emi, (emi: Emi) => emi.user)
    public emi: number | Emi

    @OneToMany(() => CreditCard, (creditCards: CreditCard) => creditCards.user)
    public creditCards: number | CreditCard

    @OneToMany(() => PostPay, (postPay: PostPay) => postPay.user)
    public postPay: number | PostPay

    @OneToMany(() => SavingTarget, (savingTarget: SavingTarget) => savingTarget.user)
    public savingTarget: number | SavingTarget

    @OneToMany(() => MoneyBucket, (moneyBucket: MoneyBucket) => moneyBucket.user)
    public moneyBucket: number | MoneyBucket

}

export default User;