import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsAddComponent } from './safety-documents-add.component';

describe('SafetyDocumentsAddComponent', () => {
  let component: SafetyDocumentsAddComponent;
  let fixture: ComponentFixture<SafetyDocumentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
