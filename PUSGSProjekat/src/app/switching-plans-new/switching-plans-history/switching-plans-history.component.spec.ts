import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansHistoryComponent } from './switching-plans-history.component';

describe('SwitchingPlansHistoryComponent', () => {
  let component: SwitchingPlansHistoryComponent;
  let fixture: ComponentFixture<SwitchingPlansHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
