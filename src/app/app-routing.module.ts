import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { GuardGuard } from './shared/services/guard/guard.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo : '/auth/login',
    pathMatch: 'full'
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canLoad: [GuardGuard]  
  },
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'home/estudiante',
    loadChildren: () => import('./student/student.module').then( m => m.StudentModule ),
    canActivate: [GuardGuard],
  },
  {
    path: 'home/monitor',
    loadChildren: () => import('./monitor/monitor.module').then( m => m.MonitorModule ),
    canActivate: [GuardGuard],
  },
  {
    path: 'home/tutor',
    loadChildren: () => import('./tutor/tutor.module').then( m => m.TutorModule ),
    canActivate: [GuardGuard],
  },
  {
    path: 'home/asesor',
    loadChildren: () => import('./asesor/asesor.module').then( m => m.AsesorModule ),
    canActivate: [GuardGuard],
  },
  {
    path: 'home/organizador',
    loadChildren: () => import('./organizador/organizador.module').then( m => m.OrganizadorModule ),
    canActivate: [GuardGuard],
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
