import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultsEventComponent } from './user-results-event.component';

describe('UserResultsEventComponent', () => {
  let component: UserResultsEventComponent;
  let fixture: ComponentFixture<UserResultsEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResultsEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResultsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
