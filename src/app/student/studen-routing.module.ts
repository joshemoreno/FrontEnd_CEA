import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoresComponent } from './pages/monitores/monitores.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';
import { TutoresComponent } from './pages/tutores/tutores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'monitores', component: MonitoresComponent, pathMatch: 'full' },
      { path: 'tutores', component: TutoresComponent, pathMatch: 'full' },
      { path: 'profesionales', component: ProfesionalesComponent, pathMatch: 'full' },
      { path: 'horario', component: SchedulerComponent, pathMatch: 'full' },
      { path: 'reservas', component: ReservationsComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudenRoutingModule { }
