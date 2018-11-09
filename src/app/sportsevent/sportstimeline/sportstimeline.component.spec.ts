import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportstimelineComponent } from './sportstimeline.component';

describe('SportstimelineComponent', () => {
  let component: SportstimelineComponent;
  let fixture: ComponentFixture<SportstimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportstimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportstimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
