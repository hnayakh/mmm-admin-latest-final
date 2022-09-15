import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiTablesComponent } from './material-ui-tables.component';

describe('MaterialUiTablesComponent', () => {
  let component: MaterialUiTablesComponent;
  let fixture: ComponentFixture<MaterialUiTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialUiTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUiTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
