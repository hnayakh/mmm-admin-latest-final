import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileApprovalListComponent } from './profile-approval-list.component';

describe('ProfileApprovalListComponent', () => {
  let component: ProfileApprovalListComponent;
  let fixture: ComponentFixture<ProfileApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
