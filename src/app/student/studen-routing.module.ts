import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoresComponent } from './pages/monitores/monitores.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { TutoresComponent } from './pages/tutores/tutores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'monitores', component: MonitoresComponent },
      { path: 'tutores', component: TutoresComponent },
      { path: 'profesionales', component: ProfesionalesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudenRoutingModule { }
