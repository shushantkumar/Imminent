import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComplexComponent } from './sports-complex.component';

describe('SportsComplexComponent', () => {
  let component: SportsComplexComponent;
  let fixture: ComponentFixture<SportsComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
