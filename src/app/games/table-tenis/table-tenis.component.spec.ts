import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTenisComponent } from './table-tenis.component';

describe('TableTenisComponent', () => {
  let component: TableTenisComponent;
  let fixture: ComponentFixture<TableTenisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTenisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
