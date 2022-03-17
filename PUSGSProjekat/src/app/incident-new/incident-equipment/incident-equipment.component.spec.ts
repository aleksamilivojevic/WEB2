import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEquipmentComponent } from './incident-equipment.component';

describe('IncidentEquipmentComponent', () => {
  let component: IncidentEquipmentComponent;
  let fixture: ComponentFixture<IncidentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
