import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptpastComponent } from './receptpast.component';

describe('ReceptpastComponent', () => {
  let component: ReceptpastComponent;
  let fixture: ComponentFixture<ReceptpastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptpastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
