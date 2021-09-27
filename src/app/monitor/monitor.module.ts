import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorOrganizerComponent } from './pages/monitor-organizer/monitor-organizer.component';
import { MonitorReservationsComponent } from './pages/monitor-reservations/monitor-reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    MonitorOrganizerComponent,
    MonitorReservationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonitorRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MonitorModule { }
