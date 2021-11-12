import { Component, Input, OnInit } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core'; // include this line

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { CalendarService } from '../../services/calendar/calendar.service';
import { requestReservation } from '../../models/reservationsDto';
import esLocale from '@fullcalendar/core/locales/es';
import { SubjectService } from 'src/app/organizador/services/subject/subject.service';
import { subjectDto } from 'src/app/organizador/models/subject.class';
import { mettingWebesDto } from '../../models/webex/getAccessTokenDto.class';
import { WebexService } from '../../services/webex/webex.service';
import { AlertsService } from '../../services/alerts/alerts.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private dialogConfig = new MatDialogConfig();

  public calendarOptions:CalendarOptions= {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    locale: esLocale,
    initialView: 'dayGridMonth',
    weekends: true, // <-- fines de semana
    editable: true,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: true,
    progressiveEventRendering: true
    
    // eventsSet: 
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  constructor( 
    public dialog: MatDialog,
    private _calendarService: CalendarService,
    private _SubjectService: SubjectService,
    private _WebexService: WebexService,
    private _AlertsService: AlertsService
    )
    {}

    public subjects: Array<subjectDto>;
    @Input() typeUser: any;

  ngOnInit(): void {
    this.checkUser();
    // id  =  llamando al decode token
    this.handleEvents('a43c4773-35cc-4b58-923b-faa6474744a7');
  }

  checkUser(){
    let typeUser = this.typeUser;
    if (typeUser.student){
      this.calendarOptions.selectMirror=false,
      this.calendarOptions.eventClick = this.reservation.bind(this);
    };
    if (typeUser.monitor || typeUser.tutor || typeUser.asesor){
      this.calendarOptions.dateClick = this.createMonitory.bind(this);
      this.calendarOptions.eventClick = this.editMonitory.bind(this);
    };
  };

  reservation(clickInfo: EventClickArg) {
    let id:string = clickInfo.event._def.publicId;
    this.dialogConfig.disableClose = true;
    this.dialogConfig.data = {
      title: 'Reserva tu Monitoria',
      Modal: 'reservation',
      id: id
    };
    this.openModal();
  };

  editMonitory(clickInfo: EventClickArg){
    this.dialogConfig.disableClose = false;
    let titleModal: string;
    let id:string = clickInfo.event._def.publicId;
    if(this.typeUser.monitor){
      titleModal = 'Editar Monitoria'
    } 
    if(this.typeUser.tutor){
      titleModal = 'Editar Tutoria'
    }
    if(this.typeUser.asesor){
      titleModal = 'Editar Asesoria'
    }
    this.dialogConfig.data = {
      title: titleModal,
      Modal: 'edit',
      id: id
    };
    this.openModal();
  };

  createMonitory(selectInfo:any) {
    let date:Array<string> = this.chooseDate(selectInfo.dateStr);
    this.dialogConfig.disableClose = true;
    let titleModal: string;
    if(this.typeUser.monitor){
      titleModal = 'Crear una Monitoria'
    } 
    if(this.typeUser.tutor){
      titleModal = 'Crear una Tutoria'
    }
    if(this.typeUser.asesor){
      titleModal = 'Crear una Asesoria'
    }

    this.dialogConfig.data = {
      title: titleModal,
      Modal: 'create',
      dateSelect: date
    };

    this.openModal();
  }

  chooseDate(date:string):Array<string>{
    let responseDate:Array<string>=[];
    if(date.includes('T')){
      responseDate = date.split('T');
      responseDate[1] = responseDate[1].split('-')[0];
    }else{
      responseDate.push(date);
    }
    return responseDate;
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

  handleEvents(id:string){
    let data = [];
    // this._calendarService.getMeetingsByUser(id)
    // .subscribe((res:any)=>{
    //   res.appoinments.map((i:any) =>{
    //         let obj = {
    //           id: i.id,
    //           title: i.title,
    //           date: i.date
    //         }
    //         data.push(obj)
    //       })
    //   this.calendarOptions.events=data;
    // });
  }

  openModal():void{
    
    this.dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='50%';
    }  
    
    this.dialogConfig.width = customWidth;
    const dialogRef = this.dialog.open(ModalComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        if(res.optType==='reservation'){
          let id = res.data.question.id;
          let image = res.data.uri;
          let question = res.data.question.question;
          image = image ? image : null;
          this._calendarService.uploadImage(id,question,image);
        }
        if(res.optType==='edit'){
          console.log(res);
        }
        if(res.optType==='create'){
          let date:string = res.data.date;
          let time:string = res.data.time;
          let startDate = (new Date(`${date}T${time}:00`).getTime());  
          let endDate = startDate+3600000;
          let startMeet = new Date(startDate);
          let endMeet = new Date(endDate);       
          let webexMeet = new mettingWebesDto();
          let title2 = (res.data.subject).split(',')[2];
          let title = title2.split(' ')[2];
          title = title+' de '+(res.data.subject).split(',')[1];
          webexMeet.title = title;
          webexMeet.start = startMeet.toISOString();
          webexMeet.end = endMeet.toISOString();
          webexMeet.mode = res.data.mode;
          webexMeet.room = res.data.room;
          webexMeet.idWebEx = null;
          webexMeet.subjectId = (res.data.subject).split(',')[0];
          if(!res.data.mode){
            localStorage.setItem('newMeet',JSON.stringify(webexMeet));
            this._WebexService.getCode();
          }else{
            if(webexMeet.room!=null){
              localStorage.setItem('newMeet',JSON.stringify(webexMeet));
            }else{
              console.log(webexMeet);
              this._AlertsService.errorAlert('El proceso se cancelo porque no ha ingresado un salón');
            }
          }
        }
        if(res.optType==='delete'){
          console.log(res);
        }
      }
    })
  }

}
