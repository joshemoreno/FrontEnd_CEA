import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorOrganizerComponent } from './pages/asesor-organizer/asesor-organizer.component';
import { AsesorReservationsComponent } from './pages/asesor-reservations/asesor-reservations.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsesorOrganizerComponent,
    AsesorReservationsComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }
