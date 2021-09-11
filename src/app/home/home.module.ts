import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { OrganizadorComponent } from './pages/organizador/organizador.component';


@NgModule({
  declarations: [
    EstudianteComponent,
    MonitorComponent,
    TutorComponent,
    OrganizadorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
