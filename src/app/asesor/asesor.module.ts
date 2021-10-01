import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorOrganizerComponent } from './pages/asesor-organizer/asesor-organizer.component';
import { AsesorReservationsComponent } from './pages/asesor-reservations/asesor-reservations.component';



@NgModule({
  declarations: [
    AsesorOrganizerComponent,
    AsesorReservationsComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
