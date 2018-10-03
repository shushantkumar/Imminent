import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceploginComponent } from './receplogin.component';

describe('ReceploginComponent', () => {
  let component: ReceploginComponent;
  let fixture: ComponentFixture<ReceploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
