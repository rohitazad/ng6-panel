import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutsComponent } from './app-layouts.component';

describe('AppLayoutsComponent', () => {
  let component: AppLayoutsComponent;
  let fixture: ComponentFixture<AppLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
