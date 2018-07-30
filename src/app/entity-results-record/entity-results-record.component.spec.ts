import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityResultsRecordComponent } from './entity-results-record.component';

describe('EntityResultsRecordComponent', () => {
  let component: EntityResultsRecordComponent;
  let fixture: ComponentFixture<EntityResultsRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityResultsRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityResultsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
