import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestsEquipmentComponent } from './work-requests-equipment.component';

describe('WorkRequestsEquipmentComponent', () => {
  let component: WorkRequestsEquipmentComponent;
  let fixture: ComponentFixture<WorkRequestsEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestsEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
