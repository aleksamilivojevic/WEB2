import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansMultimediaComponent } from './switching-plans-multimedia.component';

describe('SwitchingPlansMultimediaComponent', () => {
  let component: SwitchingPlansMultimediaComponent;
  let fixture: ComponentFixture<SwitchingPlansMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
