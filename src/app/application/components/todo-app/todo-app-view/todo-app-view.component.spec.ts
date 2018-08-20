import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppViewComponent } from './todo-app-view.component';

describe('TodoAppViewComponent', () => {
  let component: TodoAppViewComponent;
  let fixture: ComponentFixture<TodoAppViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAppViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
