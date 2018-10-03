import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepregisterComponent } from './recepregister.component';

describe('RecepregisterComponent', () => {
  let component: RecepregisterComponent;
  let fixture: ComponentFixture<RecepregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
