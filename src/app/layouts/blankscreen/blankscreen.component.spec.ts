import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankscreenComponent } from './blankscreen.component';

describe('BlankscreenComponent', () => {
  let component: BlankscreenComponent;
  let fixture: ComponentFixture<BlankscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
