import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentMultimediaComponent } from './incident-multimedia.component';

describe('IncidentMultimediaComponent', () => {
  let component: IncidentMultimediaComponent;
  let fixture: ComponentFixture<IncidentMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
