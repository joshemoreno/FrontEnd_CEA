import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TutorRoutingModule } from './tutor-routing.module';
// import { MonitorOrganizerComponent } from './pages/monitor-organizer/monitor-organizer.component';
// import { MonitorReservationsComponent } from './pages/monitor-reservations/monitor-reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { TutorOrganizerComponent } from './pages/tutor-organizer/tutor-organizer.component';
import { TutorReservationsComponent } from './pages/tutor-reservations/tutor-reservations.component';



@NgModule({
  declarations: [
    // MonitorOrganizerComponent,
    // MonitorReservationsComponent,
  
    TutorOrganizerComponent,
    TutorReservationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TutorRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TutorModule { }
