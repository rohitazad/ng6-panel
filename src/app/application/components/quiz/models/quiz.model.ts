import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class QuizModel {
    id: number;
    titleName: string;
    desc: string;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.titleName = data.titleName;
            this.desc = data.desc;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}