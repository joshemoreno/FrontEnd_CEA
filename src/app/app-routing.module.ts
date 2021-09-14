import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { GuardGuard } from './shared/services/guard/guard.guard';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canLoad: [GuardGuard]  
  },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
    canActivate: [GuardGuard],
    component: HomeComponent  
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
