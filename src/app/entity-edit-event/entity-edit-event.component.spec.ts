import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEditEventComponent } from './entity-edit-event.component';

describe('EntityEditEventComponent', () => {
  let component: EntityEditEventComponent;
  let fixture: ComponentFixture<EntityEditEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityEditEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
