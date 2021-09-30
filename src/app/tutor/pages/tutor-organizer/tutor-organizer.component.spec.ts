import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorOrganizerComponent } from './tutor-organizer.component';

describe('TutorOrganizerComponent', () => {
  let component: TutorOrganizerComponent;
  let fixture: ComponentFixture<TutorOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
