import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansBasicInfoComponent } from './switching-plans-basic-info.component';

describe('SwitchingPlansBasicInfoComponent', () => {
  let component: SwitchingPlansBasicInfoComponent;
  let fixture: ComponentFixture<SwitchingPlansBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
