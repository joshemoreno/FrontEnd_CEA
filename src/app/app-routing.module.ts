import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './auth/pages/welcome/welcome.component';
import { HomeComponent } from './home/pages/home/home.component';
import { WebexComponent } from './shared/components/webex/webex.component';
import { GuardGuard } from './shared/services/guard/guard.guard';
import { AsesorGuard } from './shared/services/guard/others/asesor/asesor.guard';
import { MonitorGuard } from './shared/services/guard/others/monitor/monitor.guard';
import { OrganizadorGuard } from './shared/services/guard/others/organizador/organizador.guard';
import { StudentGuard } from './shared/services/guard/others/student/student.guard';
import { TutorGuard } from './shared/services/guard/others/tutor/tutor.guard';

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
    path: 'webEx',
    component: WebexComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'home/estudiante',
    loadChildren: () => import('./student/student.module').then( m => m.StudentModule ),
    canActivate: [StudentGuard],
  },
  {
    path: 'home/monitor',
    loadChildren: () => import('./monitor/monitor.module').then( m => m.MonitorModule ),
    canActivate: [MonitorGuard],
  },
  {
    path: 'home/tutor',
    loadChildren: () => import('./tutor/tutor.module').then( m => m.TutorModule ),
    canActivate: [TutorGuard],
  },
  {
    path: 'home/asesor',
    loadChildren: () => import('./asesor/asesor.module').then( m => m.AsesorModule ),
    canActivate: [AsesorGuard],
  },
  {
    path: 'home/organizador',
    loadChildren: () => import('./organizador/organizador.module').then( m => m.OrganizadorModule ),
    canActivate: [OrganizadorGuard],
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
