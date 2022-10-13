import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserBalance } from './manage-user-balance.component';



describe('UserBalanceComponent', () => {
  let component: ManageUserBalance;
  let fixture: ComponentFixture<ManageUserBalance>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserBalance ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserBalance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
