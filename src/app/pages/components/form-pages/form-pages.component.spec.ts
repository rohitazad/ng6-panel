import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagesComponent } from './form-pages.component';

describe('FormPagesComponent', () => {
  let component: FormPagesComponent;
  let fixture: ComponentFixture<FormPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
