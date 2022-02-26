import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorOrganizerComponent } from './pages/monitor-organizer/monitor-organizer.component';
import { MonitorReservationsComponent } from './pages/monitor-reservations/monitor-reservations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Monitorias', component: MonitorOrganizerComponent, pathMatch: 'full' },
      { path: 'reservas', component: MonitorReservationsComponent, pathMatch: 'full' },
      { path: '**', redirectTo:'/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
