import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorOrganizerComponent } from './asesor-organizer.component';

describe('AsesorOrganizerComponent', () => {
  let component: AsesorOrganizerComponent;
  let fixture: ComponentFixture<AsesorOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
