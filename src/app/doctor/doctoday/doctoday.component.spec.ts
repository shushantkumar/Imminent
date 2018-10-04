import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctodayComponent } from './doctoday.component';

describe('DoctodayComponent', () => {
  let component: DoctodayComponent;
  let fixture: ComponentFixture<DoctodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
