import { Component, OnInit } from '@angular/core';
import { QuizesService } from 'src/app/application/services/quizes.service';
import {FormControl, Validators} from '@angular/forms';

import { QuizModel } from './models/quiz.model';
import { QuizConfig } from './models/quiz-config';
import { Question } from './models/question';
import { Option } from './models/option';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  selectedValue:any;
  quizItems:any[];
  selected;
  quizName;
  quiz: QuizModel = new QuizModel(null);
  mode = 'quiz';

  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };
  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(
    private quizesService:QuizesService
  ) { }

  ngOnInit() {
    this.quizesService.getAllQuestion().then(resData=>{
      this.quizItems = resData;
      this.quizName = this.quizItems[0].id;
      this.selected = this.quizItems[0].id;
      //console.log('resData-->', resData);
      //console.log('quizName-->', this.quizName);
      this.loadMyAc(this.quizName);
    })
  }


  loadMyAc(value:string){
    console.log(value);
    this.quizesService.getQuestion(value).subscribe(data=>{
      console.log('data', data);
      this.quiz = new QuizModel(data);
      this.pager.count = this.quiz.questions.length;
      console.log('this.quiz', this.quiz);
    });
    this.mode = 'quiz';
  }
  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId) {
      //question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
      console.log('question', question);
      console.log('option', option);
      question.options.forEach((x) => { 
        if (x.id !== option.id) {
          x.selected = false
        }
      });
      
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
    console.log('yes click to question', question.questionTypeId, this.config.autoMove);
  }



  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAns) ? 'correct' : 'wrong';
  };
 
    onSubmit() {
      let answers = [];
      this.quiz.questions.forEach(x => answers.push({ 
          'quizId': this.quiz.id, 
          'questionId': x.id, 
          'answered': x.isAns }));
  
      // Post your data to the server here. answers contains the questionId and the users' answer.
      console.log('====>',this.quiz.questions);
      this.mode = 'result';
    }
 

}
