import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsBasicInfoComponent } from './work-requests-basic-info.component';

describe('WorkRequestsBasicInfoComponent', () => {
  let component: WorkRequestsBasicInfoComponent;
  let fixture: ComponentFixture<WorkRequestsBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestsBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
