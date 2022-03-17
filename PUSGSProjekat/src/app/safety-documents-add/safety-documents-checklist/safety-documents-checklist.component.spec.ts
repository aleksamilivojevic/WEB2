import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsChecklistComponent } from './safety-documents-checklist.component';

describe('SafetyDocumentsChecklistComponent', () => {
  let component: SafetyDocumentsChecklistComponent;
  let fixture: ComponentFixture<SafetyDocumentsChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
