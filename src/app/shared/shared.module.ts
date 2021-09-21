import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import interactionPlugin from '@fullcalendar/interaction';
import { HomeComponent } from '../home/pages/home/home.component';
import { CardComponent } from './components/card/card.component';

import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FullCalendarModule } from '@fullcalendar/angular';


// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   timeGridPlugin,
//   listPlugin,
//   interactionPlugin
// ])

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTabsModule,
    CardComponent,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    // FullCalendarModule
  ],
  entryComponents: [ModalComponent],

})
export class SharedModule { }
