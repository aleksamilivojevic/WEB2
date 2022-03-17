import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsBasicInfoComponent } from './safety-documents-basic-info.component';

describe('SafetyDocumentsBasicInfoComponent', () => {
  let component: SafetyDocumentsBasicInfoComponent;
  let fixture: ComponentFixture<SafetyDocumentsBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
