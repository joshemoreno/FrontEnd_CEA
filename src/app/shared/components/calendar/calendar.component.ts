import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core'; // include this line

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private dialogConfig = new MatDialogConfig();

  constructor( public dialog: MatDialog){}

  @Input() typeUser: any;

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true, // <-- fines de semana
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(){
    let typeUser = this.typeUser;
    if (typeUser.student){
      this.calendarOptions.eventClick = this.reservation.bind(this);
    };
    if (typeUser.monitor || typeUser.tutor){
      this.calendarOptions.dateClick = this.createMonitory.bind(this);
      this.calendarOptions.eventClick = this.editMonitory.bind(this);
    };
  };

  reservation(clickInfo: EventClickArg) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.data = {
      title: 'Reserva tu Monitoria',
      Modal: 'reservation'
    };
    this.openModal();
  };

  editMonitory(clickInfo: EventClickArg){
    this.dialogConfig.disableClose = false;
    this.dialogConfig.data = {
      title: 'Datos de Monitoria',
      Modal: 'edit'
    };
    this.openModal();
  };

  createMonitory(selectInfo: DateSelectArg) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.data = {
      title: 'Datos de Monitoria',
      Modal: 'create'
    };
    this.openModal();
  }

    // const title = prompt('Please enter a new title for your event');
    // const calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   });
    // }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  openModal():void{
    
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.width = '50%';

    const dialogRef = this.dialog.open(ModalComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(res.optType==='reservation'){
        console.log('reserva');
      }
      if(res.optType==='edit'){
        console.log('edit');
      }
      if(res.optType==='create'){
        console.log('crear');
      }
    })
  }

}
