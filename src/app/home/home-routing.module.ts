import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { OrganizadorComponent } from './pages/organizador/organizador.component';
import { TutorComponent } from './pages/tutor/tutor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'monitor', component: MonitorComponent },
      { path: 'estudiante', component: EstudianteComponent },
      { path: 'tutor', component: TutorComponent },
      { path: 'organizador', component: OrganizadorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
