import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEditProfileComponent } from './entity-edit-profile.component';

describe('EntityEditProfileComponent', () => {
  let component: EntityEditProfileComponent;
  let fixture: ComponentFixture<EntityEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
