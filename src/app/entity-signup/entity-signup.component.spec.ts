import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySignupComponent } from './entity-signup.component';

describe('EntitySignupComponent', () => {
  let component: EntitySignupComponent;
  let fixture: ComponentFixture<EntitySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
