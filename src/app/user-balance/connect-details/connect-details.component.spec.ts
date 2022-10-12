import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDetailsComponent } from './connect-details.component';

describe('ConnectDetailsComponent', () => {
  let component: ConnectDetailsComponent;
  let fixture: ComponentFixture<ConnectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
