import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "../users/users.entity";

@Entity("creditCard")
class CreditCard {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "varchar",
        nullable: false
    })
    public name: string

    @Column({
        type: "numeric",
        nullable: false
    })
    public cardLimit: number

    @ManyToOne(() => User, (user: User) => user.income)
    public user: number | User

    @Column({
        type: "timestamptz",
    })
    public statementDate: Date;

    @Column({
        type: "enum",
        enum: ["active", "inactive"],
        default: "active"
    })
    public status: string;

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

}

export default CreditCard;