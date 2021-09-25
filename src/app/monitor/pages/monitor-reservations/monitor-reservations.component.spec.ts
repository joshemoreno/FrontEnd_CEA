import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorReservationsComponent } from './monitor-reservations.component';

describe('MonitorReservationsComponent', () => {
  let component: MonitorReservationsComponent;
  let fixture: ComponentFixture<MonitorReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
