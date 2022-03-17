import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsHistoryComponent } from './work-requests-history.component';

describe('WorkRequestsHistoryComponent', () => {
  let component: WorkRequestsHistoryComponent;
  let fixture: ComponentFixture<WorkRequestsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
