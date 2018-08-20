import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePagesComponent } from './date-pages.component';

describe('DatePagesComponent', () => {
  let component: DatePagesComponent;
  let fixture: ComponentFixture<DatePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
