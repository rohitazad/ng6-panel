import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private http: HttpClient) { 

  }

  //get qeustion api here 
  getQuestion(value:string){
    //console.log(value);
    return this.http.get(value);
  }

  // get all question from local json list
  getAllQuestion(){
    return new Promise<any>(resolve=>{

       resolve([
         {id:'json_data/html.json', name:'html'},
         {id:'json_data/javascript.json', name:'javascript'},
         {id:'json_data/css.json', name:'Css'},
         {id:'json_data/angular.json', name:'Angular'}
       ]);
    })
  }

}
