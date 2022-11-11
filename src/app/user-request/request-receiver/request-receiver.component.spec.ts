import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReceiverComponent } from './request-receiver.component';

describe('RequestReceiverComponent', () => {
  let component: RequestReceiverComponent;
  let fixture: ComponentFixture<RequestReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
