import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInsertEventComponent } from './entity-insert-event.component';

describe('EntityInsertEventComponent', () => {
  let component: EntityInsertEventComponent;
  let fixture: ComponentFixture<EntityInsertEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityInsertEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInsertEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
