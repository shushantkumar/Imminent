import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocregComponent } from './docreg.component';

describe('DocregComponent', () => {
  let component: DocregComponent;
  let fixture: ComponentFixture<DocregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
