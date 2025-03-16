import { Entity , Column , PrimaryColumn , ManyToOne , JoinColumn , UpdateDateColumn,CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Quiz } from "src/quizzes/entities/quiz.entity";

@Entity('scores')
export class Score {

    @PrimaryGeneratedColumn()
    id : number;

@ManyToOne(()=>User)
@JoinColumn({name : 'user_id'})
user:User;


@Column()
score: number;

@CreateDateColumn({ type: 'timestamp' })
created_at: Date;
}


