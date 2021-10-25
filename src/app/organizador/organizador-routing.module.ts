import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsComponent } from './pages/metrics/metrics.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'metricas', component: MetricsComponent, pathMatch: 'full' },
      { path: 'personas', component: PersonalComponent, pathMatch: 'full' },
      { path: '**', redirectTo:'/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizadorRoutingModule { }
