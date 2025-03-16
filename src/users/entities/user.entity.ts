import { Entity,Column,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
export type Roles = 'student' | 'admin';

@Entity('users')
export class User {
 @PrimaryGeneratedColumn('uuid')
id:string;

@Column({unique:true})
username : string;

@Column({unique : true})
email : string;

@Column()
password : string;

@Column({type : 'enum' , enum :['student', 'admin']  , default : 'student'})
role : Roles

@CreateDateColumn({type : 'timestamp'})
created_at : Date;

@ManyToOne(()=>User)
@JoinColumn({name : 'created_by'})
createdBy : User;

@UpdateDateColumn({type : 'timestamp'})
updated_at : Date;

@ManyToOne(()=>User)
@JoinColumn({name : 'updated_by'})
updatedBy : User;
    static password: string;
}
