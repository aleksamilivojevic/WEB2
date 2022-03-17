import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsHistoryComponent } from './safety-documents-history.component';

describe('SafetyDocumentsHistoryComponent', () => {
  let component: SafetyDocumentsHistoryComponent;
  let fixture: ComponentFixture<SafetyDocumentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
