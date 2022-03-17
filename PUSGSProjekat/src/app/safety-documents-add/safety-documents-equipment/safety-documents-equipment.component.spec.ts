import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsEquipmentComponent } from './safety-documents-equipment.component';

describe('SafetyDocumentsEquipmentComponent', () => {
  let component: SafetyDocumentsEquipmentComponent;
  let fixture: ComponentFixture<SafetyDocumentsEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
