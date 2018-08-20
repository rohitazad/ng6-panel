import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import {Router, ActivatedRoute, Params} from '@angular/router';


import { TodoService } from 'src/app/application/services/todo.service';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-app-edit',
  templateUrl: './todo-app-edit.component.html',
  styleUrls: ['./todo-app-edit.component.css']
})
export class TodoAppEditComponent implements OnInit {

  editId:string;
  edittodoCategory:string;
  formUpdate:boolean = false;

  minDate = new Date(2015, 0, 1);
  maxDate = new Date(2020, 0, 1);
  todoForm:FormGroup;

  categories:any = [
    {value: 'in-progress', viewValue: 'In progress'},
    {value: 'testing', viewValue: 'Testing'},
    {value: 'tested', viewValue: 'Tested'},
    {value: 'code-review', viewValue: 'Code Review'}
  ]

  constructor(
      private _todoService:TodoService,
      fb: FormBuilder,
      private router : Router,
      private activatedRoute: ActivatedRoute,
      private toastr: ToastrService
      ) {
        this.todoForm = fb.group({
          toDoTitle: ["", Validators.required],
          todoDescription:["", Validators.required],
          todoCategory:["", Validators.required],
          todoStartDate:[""]
        })
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.editId = params.id;
      this.edittodoCategory = params.todoCategory;
      console.log(this.editId, this.edittodoCategory);
      if(this.editId && this.edittodoCategory){
        this.todoEditDataFetch();
      }
    })
  }


  private getUniqueId(){
    let now = new Date();
    let doUnique = now.getFullYear().toString();
    doUnique += (now.getMonth()  < 9 ? 0 : '')  + (now.getMonth() + 1).toString();
    doUnique += (now.getDate() < 10 ? 0 : '') + now.getDate().toString();
    doUnique += (now.getHours() < 10 ? 0 : '') + now.getHours().toString();
    doUnique += (now.getMinutes() < 10 ? 0 : '') + now.getMinutes().toString();
    doUnique += (now.getSeconds() < 10 ? 0 : '') + now.getSeconds().toString();
    doUnique += (now.getMilliseconds() < 10 ? 0 : '') + now.getMilliseconds().toString();

    return doUnique;
  }

  addTodo(){
    this.formUpdate = false;
    if(this.editId && this.edittodoCategory){
      this.updateTodoList();
    }else{
      
      this.newTodoAdd();
    }
  }

  private newTodoAdd(){
    console.log(this.todoForm.value);
    let todoId = this.getUniqueId();
    let todoData = {
        'title' : this.todoForm.value.toDoTitle,
        '_dateCreated': this.todoForm.value.todoStartDate,
        'discription' : this.todoForm.value.todoDescription,
        'id':todoId
    }
     this._todoService.addToDo(todoData, this.todoForm.value.todoCategory).then(resData=>{
       console.log('resData', resData);
      
       if(resData == 'success'){
        this.toastr.success('Successfuly added your todo', 'Success',{
          timeOut:3000
        })
        this.router.navigate(['applications/todo']);
       }else{
        this.toastr.error('Cont to Rohit Azad Malik', 'Some Get Error ', {
          timeOut:3000
        })
       }
     })
  }
  private updateTodoList(){

      let todoId = this.editId;
      let todoData = {
          'title' : this.todoForm.value.toDoTitle,
          '_dateCreated': this.todoForm.value.todoStartDate,
          'discription' : this.todoForm.value.todoDescription,
          'id':todoId,
          'category':this.todoForm.value.todoCategory
      }
      console.log('update todo list add ', todoData);
      this._todoService.updateTodo(todoData, this.edittodoCategory).then(resData=>{
        console.log('update todo data', resData);
        if(resData == 'success'){
          this.toastr.success('Your todo successfull added', 'Thanks for Add',{
            timeOut: 3000
          })
          this.router.navigate(['applications/todo']);
        }else{
          this.toastr.error('Some error for saving your todo', 'Contact To Rohit Azad Malik',{
            timeOut: 3000
          })
        }
      })
  }


  // =================================== todo edit here
  todoEditDataFetch(){

    

    if(this.editId && this.edittodoCategory){
      
      this._todoService.todoRecordFetch(this.editId, this.edittodoCategory).then(data=>{
        console.log('todo edit recored fetch here ', data);
        if(data == 'NotFoundAnyRecords'){
          this.toastr.error('Not found your  id', 'Not Found This Records', {
            timeOut: 3000
          })
          this.router.navigate(['/applications/todo/add-todo']);
        }else if(data == 'NotFoundCategory'){
          this.toastr.error('Not found your category or id', 'Not Found This Records', {
            timeOut: 3000
          })
          this.router.navigate(['/applications/todo/add-todo']);
        }else{
          this.todoForm.patchValue({
            toDoTitle:data.title,
            todoDescription: data.discription,
            todoStartDate : data._dateCreated,
            todoCategory: this.edittodoCategory
          })
        }
        
      })
    }
  }


  // ====================== todo back list todo
  goBackTodoList(){
    console.log('yes click to go back button');
    console.log(this.todoForm);
    if(this.todoForm.touched){
      this.formUpdate = true;
    }else{
      this.formUpdate = false;
    }
    this.router.navigate(['applications/todo']);
  }
  canDeactivate() :Observable<boolean> | boolean{
    console.log('i am navigating away');
    if (this.formUpdate) {
      return window.confirm('Your data will be lost?');
    }
    return true;
  }
  removeTodo(){
    // 
    if(confirm('Are you sure you want to remove to this todo?')){
      this.removeTodoData();
    }
  }
  private removeTodoData(){
    this._todoService.removeTodo(this.editId, this.edittodoCategory).then(data=>{
      console.log(data);
      if(data == 'RemoveSuccess'){
        this.toastr.success('Todo Was Remove', 'This todo is remove', {
          timeOut:3000
        })
        this.router.navigate(['applications/todo']);
      }else{
        this.toastr.error('Some error', 'Not remove check to code',{
          timeOut:3000
        })
      }
    })
  }



  

}

