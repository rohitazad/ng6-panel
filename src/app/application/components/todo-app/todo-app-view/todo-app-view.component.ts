import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'todo-app-view',
  templateUrl: './todo-app-view.component.html',
  styleUrls: ['./todo-app-view.component.css']
})
export class TodoAppViewComponent implements OnInit {
  @Input() todoViewData:any;
  @Output() todoIdValue = new EventEmitter();;

  constructor() { }


  editTodoList(id:string, category:string){
    //console.log('my id is ', id);
    this.todoIdValue.emit({id:id, todoCategory:category});
  }

  ngOnInit() {

    //console.log('todoViewData show => ', this.todoViewData);

  }

}
