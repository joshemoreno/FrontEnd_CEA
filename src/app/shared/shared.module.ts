import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { HomeComponent } from '../home/pages/home/home.component';
import { CardComponent } from './components/card/card.component';

import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { WebexComponent } from './components/webex/webex.component'; 
import { HeaderComponent } from './components/header/header.component';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ModalComponent,
    CalendarComponent,
    SpinnerComponent,
    WebexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FullCalendarModule,
    MatProgressBarModule
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
    CalendarComponent,
    FullCalendarModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    NgxChartsModule,
    SpinnerComponent
  ],
  entryComponents: [ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
