import { Option } from './option';

export class Question {
    id: number;
    questionTitle: string;
    questionTypeId: number;
    options: Option[];
    isAns: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionTitle = data.questionTitle;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}