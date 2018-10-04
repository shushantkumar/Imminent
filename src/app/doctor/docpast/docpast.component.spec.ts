import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpastComponent } from './docpast.component';

describe('DocpastComponent', () => {
  let component: DocpastComponent;
  let fixture: ComponentFixture<DocpastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocpastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
