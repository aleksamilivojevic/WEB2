import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingPlansNewComponent } from './switching-plans-new.component';

describe('SwitchingPlansNewComponent', () => {
  let component: SwitchingPlansNewComponent;
  let fixture: ComponentFixture<SwitchingPlansNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingPlansNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingPlansNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
