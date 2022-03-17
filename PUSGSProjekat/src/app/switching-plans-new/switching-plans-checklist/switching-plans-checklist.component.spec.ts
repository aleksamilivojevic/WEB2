import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansChecklistComponent } from './switching-plans-checklist.component';

describe('SwitchingPlansChecklistComponent', () => {
  let component: SwitchingPlansChecklistComponent;
  let fixture: ComponentFixture<SwitchingPlansChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
