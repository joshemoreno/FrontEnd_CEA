import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorReservationsComponent } from './tutor-reservations.component';

describe('TutorReservationsComponent', () => {
  let component: TutorReservationsComponent;
  let fixture: ComponentFixture<TutorReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
