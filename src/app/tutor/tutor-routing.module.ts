import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorOrganizerComponent } from './pages/tutor-organizer/tutor-organizer.component';
import { TutorReservationsComponent } from './pages/tutor-reservations/tutor-reservations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tutorias', component: TutorOrganizerComponent, pathMatch: 'full' },
      { path: 'reservas', component: TutorReservationsComponent, pathMatch: 'full' },
      { path: '**', redirectTo:'/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
