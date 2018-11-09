import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportseventComponent } from './sportsevent.component';

describe('SportseventComponent', () => {
  let component: SportseventComponent;
  let fixture: ComponentFixture<SportseventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportseventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
