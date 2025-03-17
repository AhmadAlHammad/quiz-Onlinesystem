import { User } from "src/users/entities/user.entity";
import { Question } from "src/questions/entities/question.entity";
import { Entity , Column , CreateDateColumn , UpdateDateColumn , JoinColumn,ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('options')
export class Option_quize{

    @PrimaryGeneratedColumn()

    id : number;

    @ManyToOne(()=>Question)
    @JoinColumn({name : 'question_id'})
    question : Question;

    @Column()
    Option_text : string;

    @Column()
    is_correct: boolean;
@CreateDateColumn({type : 'timestamp'})
created_at :Date;

@ManyToOne(()=>User)
@JoinColumn({name : 'created_by'})
createdBy  :User;


@UpdateDateColumn({type : 'timestamp'})
updated_at : Date;

@ManyToOne(()=>User)
@JoinColumn({name : 'updated_by'})

updatedBy : User;

    
}
