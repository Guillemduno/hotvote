import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEventComponent } from './entity-event.component';

describe('EntityEventComponent', () => {
  let component: EntityEventComponent;
  let fixture: ComponentFixture<EntityEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
