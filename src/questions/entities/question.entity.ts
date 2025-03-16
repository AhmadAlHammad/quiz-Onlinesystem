import { Entity,PrimaryColumn , Column, ManyToOne , JoinColumn,CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import { Quiz } from "src/quizzes/entities/quiz.entity";
import { User } from "src/users/entities/user.entity";

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

@ManyToOne(() => Quiz)
@JoinColumn({ name: 'quiz_id' })
quiz: Quiz;

@Column('text')
question_text: string;

@Column({ type: 'enum', enum: ['multiple_choice', 'true_false'] })
question_type: 'multiple_choice' | 'true_false';

@CreateDateColumn({ type: 'timestamp' })
created_at: Date;

@ManyToOne(() => User)
@JoinColumn({ name: 'created_by' })
createdBy: User;

@UpdateDateColumn({ type: 'timestamp' })
updated_at: Date;

@ManyToOne(() => User)
@JoinColumn({ name: 'updated_by' })
updatedBy: User;



}
