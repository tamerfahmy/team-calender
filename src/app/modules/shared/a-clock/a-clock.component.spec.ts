import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AClockComponent } from './a-clock.component';

describe('AClockComponent', () => {
  let component: AClockComponent;
  let fixture: ComponentFixture<AClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
