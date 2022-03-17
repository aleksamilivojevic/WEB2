import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsNewComponent } from './work-requests-new.component';

describe('WorkRequestsNewComponent', () => {
  let component: WorkRequestsNewComponent;
  let fixture: ComponentFixture<WorkRequestsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
