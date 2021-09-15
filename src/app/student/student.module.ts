import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { StudenRoutingModule } from './studen-routing.module';
import { MonitoresComponent } from './pages/monitores/monitores.component';
import { TutoresComponent } from './pages/tutores/tutores.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';



@NgModule({
  declarations: [
    MonitoresComponent,
    TutoresComponent,
    ProfesionalesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudenRoutingModule
  ]
})
export class StudentModule { }
