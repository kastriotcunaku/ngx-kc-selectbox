import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectboxComponent } from './ngx-selectbox.component';

describe('NgxSelectboxComponent', () => {
  let component: NgxSelectboxComponent;
  let fixture: ComponentFixture<NgxSelectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
