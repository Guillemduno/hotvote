import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVoteEventComponent } from './user-vote-event.component';

describe('UserVoteEventComponent', () => {
  let component: UserVoteEventComponent;
  let fixture: ComponentFixture<UserVoteEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVoteEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVoteEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
