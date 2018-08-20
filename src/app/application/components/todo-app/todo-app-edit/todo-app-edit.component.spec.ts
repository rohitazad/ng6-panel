import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppEditComponent } from './todo-app-edit.component';

describe('TodoAppEditComponent', () => {
  let component: TodoAppEditComponent;
  let fixture: ComponentFixture<TodoAppEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAppEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
