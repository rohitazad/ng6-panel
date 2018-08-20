export class Option {
    id: number;
    questionId: number;
    name: string;
    isAns: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAns = data.isAns;
    }
}