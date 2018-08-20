import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/application/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  _allTodoData:any;

  constructor(
    private _TodoService: TodoService,
    private router:Router
  ) {

   }

  ngOnInit() {
    this._allTodoData = this._TodoService.fetchData();
  }

  getTodoId(data){
    console.log('output id get ', data.id, data.todoCategory);
    this.router.navigate(['applications/todo/edit-todo/', data.id, data.todoCategory]);
  }

}
