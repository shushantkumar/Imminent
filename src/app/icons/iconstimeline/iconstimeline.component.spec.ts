import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstimelineComponent } from './iconstimeline.component';

describe('IconstimelineComponent', () => {
  let component: IconstimelineComponent;
  let fixture: ComponentFixture<IconstimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconstimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconstimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
