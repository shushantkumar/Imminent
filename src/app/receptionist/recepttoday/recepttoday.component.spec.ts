import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepttodayComponent } from './recepttoday.component';

describe('RecepttodayComponent', () => {
  let component: RecepttodayComponent;
  let fixture: ComponentFixture<RecepttodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepttodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepttodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
