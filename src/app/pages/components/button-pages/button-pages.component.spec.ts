import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPagesComponent } from './button-pages.component';

describe('ButtonPagesComponent', () => {
  let component: ButtonPagesComponent;
  let fixture: ComponentFixture<ButtonPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
