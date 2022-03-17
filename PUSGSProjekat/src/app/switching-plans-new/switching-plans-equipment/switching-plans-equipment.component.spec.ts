import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansEquipmentComponent } from './switching-plans-equipment.component';

describe('SwitchingPlansEquipmentComponent', () => {
  let component: SwitchingPlansEquipmentComponent;
  let fixture: ComponentFixture<SwitchingPlansEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
