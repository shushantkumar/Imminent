import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevappoinComponent } from './prevappoin.component';

describe('PrevappoinComponent', () => {
  let component: PrevappoinComponent;
  let fixture: ComponentFixture<PrevappoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevappoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevappoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
