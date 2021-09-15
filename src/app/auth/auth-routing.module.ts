import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from '../shared/services/guard/guard.guard';

import { LoginComponent } from './pages/login/login.component';
import { LogonComponent } from './pages/logon/logon.component';

const routes: Routes = [
  {path:'', 
    children:[
      { path: 'login', component: LoginComponent},
      { path: 'logon', component: LogonComponent},
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
