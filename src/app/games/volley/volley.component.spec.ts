import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyComponent } from './volley.component';

describe('VolleyComponent', () => {
  let component: VolleyComponent;
  let fixture: ComponentFixture<VolleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
