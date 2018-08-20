import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePagesComponent } from './table-pages.component';

describe('TablePagesComponent', () => {
  let component: TablePagesComponent;
  let fixture: ComponentFixture<TablePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
