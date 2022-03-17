import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsMultimediaComponent } from './work-requests-multimedia.component';

describe('WorkRequestsMultimediaComponent', () => {
  let component: WorkRequestsMultimediaComponent;
  let fixture: ComponentFixture<WorkRequestsMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestsMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
