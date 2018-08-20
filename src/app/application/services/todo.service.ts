import { Injectable } from '@angular/core';


const todoFakeData = {
  '_inProgress': [
                  {
                    'id' : '20180513114731653',
                    'title':'Editable fix view table', 
                    'discription':'please do this as soon as possible', 
                    '_dateCreated':'2018-05-12T14:30:00.000Z'
                  },
                  {
                    'id' : '20180514114731654',
                    'title':'fix all bug in newsletter', 'discription':'please do this before 12th', '_dateCreated':'2018-06-14T18:30:00.000Z'}
                ],
  '_testing': [
                  {
                    'id' : '20180513115731651',
                    'title':'Don\'t display to this icon ', 'discription':'Done testing ', '_dateCreated':'2018-06-15T18:30:00.000Z'},
                  {
                    'id' : '20180611114731651',
                    'title':'image is not coming to properly', 'discription':'please check to image is not coming to properly', '_dateCreated':'2018-05-12T18:30:00.000Z'}
                ],
  '_tested': [
                  {
                    'id' : '20180513114731999',
                    'title':'All issue is fix', 'discription':'tested done ', '_dateCreated':'2018-05-11T18:30:00.000Z'},
                  {
                    'id' : '20180313114735851',
                    'title':'All image are fine', 'discription':'image is good', '_dateCreated':'2018-04-18T18:30:00.000Z'}
                ],
  '_review': [
                {
                  'id' : '20180213116731451',
                  'title':'pre-load attachments', 'discription':'nice code', '_dateCreated':'2018-05-10T18:30:00.000Z'},
                {
                  'id' : '20180113113331612',
                  'title':'new functionality is good', 'discription':'All code is nice', '_dateCreated':'2018-03-12T18:30:00.000Z'}
              ]
}

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  constructor() {
    console.log('yes i m todo service');
   }

   fetchData(){
     let data = localStorage.getItem('_todoFakeData');
     if(data !== null){
        let getDataToStores = JSON.parse(data);
        //console.log('getData', getDataToStores);
        return getDataToStores;
      }else{
        let setDataToStores = todoFakeData;
        localStorage.setItem('_todoFakeData', JSON.stringify(setDataToStores));
        //console.log('setData', setDataToStores);
        return setDataToStores;
     }
   }

   // check what todo add in your list 
   // ==========================================================================
   addToDo(data, todoCategory){
     let todoData = {
        'title' : data.title,
        '_dateCreated': data._dateCreated,
        'discription' : data.discription,
        'id': data.id
     }
     return new Promise<any> (resolve=>{
      if(todoCategory === 'in-progress'){
        return resolve(this.in_progress(todoData));
      }else if(todoCategory === 'testing'){
        return resolve(this.testing(todoData));
      }else if(todoCategory === 'tested'){
        return resolve(this.tested(todoData));
      }else if(todoCategory === 'code-review'){
        return resolve(this.codeReview(todoData));
      }
     })
   }

   // add  todo
   private in_progress(data){
      let toDoData:any = this.fetchData();
      toDoData._inProgress.push(data);
      localStorage.setItem('_todoFakeData', JSON.stringify(toDoData));
      return 'success';
   }

   private testing(data){
      let toDoData:any = this.fetchData();
      toDoData._testing.push(data);
      localStorage.setItem('_todoFakeData', JSON.stringify(toDoData));
      return 'success';
  }

  private tested(data){
    let toDoData:any = this.fetchData();
    toDoData._tested.push(data);
    localStorage.setItem('_todoFakeData', JSON.stringify(toDoData));
    return 'success';
  }

  private codeReview(data){
    let toDoData:any = this.fetchData();
    toDoData._review.push(data);
    localStorage.setItem('_todoFakeData', JSON.stringify(toDoData));
    return 'success';
  }


  // todo single data fetch 
  todoRecordFetch(id, category){
    let toDoData : any = this.fetchData();
    return new Promise<any>(resolve=>{
      let todoSingleRecord:any = this.findOneRecordsAndSend(id, category);
      resolve(todoSingleRecord);
    })
  }
  // FINDRECOREDS 
  private findOneRecordsAndSend(id, category){
    let toDoData : any = this.fetchData();
    let todoSingleRecord:any;
    if(category == 'in-progress'){
      let obj = toDoData._inProgress.find(obj=>{
        if(obj.id === id){
          todoSingleRecord = obj;
        }
      });
   }else if(category == 'testing'){
    let obj = toDoData._testing.find(obj=>{
      if(obj.id === id){
        todoSingleRecord = obj;
      }
    });
   }else if(category == 'tested'){
    let obj = toDoData._tested.find(obj=>{
      if(obj.id === id){
        todoSingleRecord = obj;
      }
    });
   }else if(category == 'code-review'){
    let obj = toDoData._review.find(obj=>{
      if(obj.id === id){
        todoSingleRecord = obj;
      }
    });
   }else{
    todoSingleRecord = 'NotFoundCategory'
   }

   if(todoSingleRecord === undefined){
    todoSingleRecord = 'NotFoundAnyRecords'
   }
    return todoSingleRecord;
  }

  // TODO UPDATE SERVICE HERE
  updateTodo(data:any, todoCategory:string){
    console.log(data);
    return new Promise<any>(resolve=>{

      let todoData:any = this.fetchData();
      let myNewlist:any;
      const idToRemove = data.id;
      if(todoCategory == 'in-progress'){
        let removeIndex = todoData._inProgress.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._inProgress.splice(removeIndex, 1);
      }else if(todoCategory == 'testing'){
        let removeIndex = todoData._testing.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._testing.splice(removeIndex, 1);
      }else if(todoCategory == 'tested'){
        let removeIndex = todoData._tested.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._tested.splice(removeIndex, 1);
      }else if(todoCategory == 'code-review'){
        let removeIndex = todoData._review.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._review.splice(removeIndex, 1);
      }
        
        //console.log('todoData--', myNewlist);
        console.log('todoData todoData._inProgress--', todoData._inProgress);
        localStorage.removeItem('_todoFakeData');
        localStorage.setItem('_todoFakeData', JSON.stringify(todoData));
        
        
        resolve(this.addToDo(data, data.category));
    })
  }
  
   // ======================= TODO Remove Code here ========================
   removeTodo(id:string, todoCategory:string){
    return new Promise<any>(resolve=>{
      let todoData:any = this.fetchData();
      let myNewlist:any;
      const idToRemove = id;
      if(todoCategory == 'in-progress'){
        let removeIndex = todoData._inProgress.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._inProgress.splice(removeIndex, 1);
      }else if(todoCategory == 'testing'){
        let removeIndex = todoData._testing.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._testing.splice(removeIndex, 1);
      }else if(todoCategory == 'tested'){
        let removeIndex = todoData._tested.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._tested.splice(removeIndex, 1);
      }else if(todoCategory == 'code-review'){
        let removeIndex = todoData._review.map(function(item) { return item.id; }).indexOf(idToRemove);
        todoData._review.splice(removeIndex, 1);
      }
      
      localStorage.removeItem('_todoFakeData');
      localStorage.setItem('_todoFakeData', JSON.stringify(todoData));

      resolve('RemoveSuccess');
    })
  }
}
