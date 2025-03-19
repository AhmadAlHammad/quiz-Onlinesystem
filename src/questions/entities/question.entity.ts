import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Quiz } from "src/quizzes/entities/quiz.entity";
import { User } from "src/users/entities/user.entity";
import { Option_quize } from "src/options/entities/option.entity";

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Quiz, { eager: true })
    @JoinColumn({ name: 'quiz_id' })
    quiz: Quiz;

    @Column('text', { default: 'please fill of the question' })
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

    @OneToMany(() => Option_quize, (option_quize) => option_quize.question)
    optionQuizzes: Option_quize[];

    
}
