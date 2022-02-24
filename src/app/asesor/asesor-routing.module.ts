import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorOrganizerComponent } from './pages/asesor-organizer/asesor-organizer.component';
import { AsesorReservationsComponent } from './pages/asesor-reservations/asesor-reservations.component';

const routes: Routes = [
  {path:'', 
    children:[
      { path: 'asesorias', component: AsesorOrganizerComponent, pathMatch: 'full' },
      { path: 'reservas', component: AsesorReservationsComponent, pathMatch: 'full' },
      { path: '**', redirectTo:'/home'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AsesorRoutingModule { }
