import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPagesComponent } from './graph-pages.component';

describe('GraphPagesComponent', () => {
  let component: GraphPagesComponent;
  let fixture: ComponentFixture<GraphPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
