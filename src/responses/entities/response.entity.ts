import { User } from "src/users/entities/user.entity";
import { Question } from "src/questions/entities/question.entity";
import { Quiz } from "src/quizzes/entities/quiz.entity";
import { Option_quize } from "src/options/entities/option.entity";

import { Entity , CreateDateColumn , UpdateDateColumn , ManyToOne , JoinColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity ('responses')
export class Response {

    @PrimaryGeneratedColumn()
    id : string;

    @ManyToOne(()=>User)
    @JoinColumn({name : 'user_id'})
    user : User;

    @ManyToOne(()=>Quiz)
    @JoinColumn({name : 'quiz_id'})
    quiz :Quiz;

    @ManyToOne(()=>Question)
    @JoinColumn({name : 'question_id'})
    question : Question;

    @ManyToOne(()=>Option_quize)
    @JoinColumn({name : 'selected_option_id'})
    selectedOption : Option_quize;

    @CreateDateColumn({type : 'timestamp'})
    created_at : Date;

}
