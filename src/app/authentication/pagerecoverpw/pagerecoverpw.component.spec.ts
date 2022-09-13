import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerecoverpwComponent } from './pagerecoverpw.component';

describe('PagerecoverpwComponent', () => {
  let component: PagerecoverpwComponent;
  let fixture: ComponentFixture<PagerecoverpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerecoverpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerecoverpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
