import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorReservationsComponent } from './asesor-reservations.component';

describe('AsesorReservationsComponent', () => {
  let component: AsesorReservationsComponent;
  let fixture: ComponentFixture<AsesorReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
