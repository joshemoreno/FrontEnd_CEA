import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorOrganizerComponent } from './monitor-organizer.component';

describe('MonitorOrganizerComponent', () => {
  let component: MonitorOrganizerComponent;
  let fixture: ComponentFixture<MonitorOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
