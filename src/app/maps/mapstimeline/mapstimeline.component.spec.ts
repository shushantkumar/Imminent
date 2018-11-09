import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapstimelineComponent } from './mapstimeline.component';

describe('MapstimelineComponent', () => {
  let component: MapstimelineComponent;
  let fixture: ComponentFixture<MapstimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapstimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapstimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
