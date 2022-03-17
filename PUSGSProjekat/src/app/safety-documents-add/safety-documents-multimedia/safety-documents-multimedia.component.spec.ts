import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsMultimediaComponent } from './safety-documents-multimedia.component';

describe('SafetyDocumentsMultimediaComponent', () => {
  let component: SafetyDocumentsMultimediaComponent;
  let fixture: ComponentFixture<SafetyDocumentsMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
