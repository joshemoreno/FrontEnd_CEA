import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CalendarService } from '../../services/calendar/calendar.service';
import esLocale from '@fullcalendar/core/locales/es';
import { subjectDto } from 'src/app/organizador/models/subject.class';
import { mettingWebesDto } from '../../models/webex/getAccessTokenDto.class';
import { WebexService } from '../../services/webex/webex.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { MeetsService } from 'src/app/monitor/services/meets/meets.service';
import { SessionService } from '../../services/session/session.service';
import { currentUser } from '../../models/token.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralService } from 'src/app/student/services/general/general.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private dialogConfig = new MatDialogConfig();

  public calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    locale: esLocale,
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: false,
    dayMaxEvents: true,
    progressiveEventRendering: true,
    nextDayThreshold: '01:00:00',
    businessHours: [{
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '07:00',
      endTime: '20:00'
    }, {
      daysOfWeek: [6],
      startTime: '07:00',
      endTime: '12:00',
    },
    ]
  };

  constructor(
    public dialog: MatDialog,
    private _calendarService: CalendarService,
    private _WebexService: WebexService,
    private _AlertsService: AlertsService,
    private _MeetsService: MeetsService,
    private _CalendarService: CalendarService,
    private _onSession: SessionService,
    private _snackBar: MatSnackBar,
    private generalService: GeneralService
  ) { }

  public subjects: Array<subjectDto>;
  public currenDate: Date;
  private supportId: number;
  private user: currentUser;
  private selectMeet: number;
  @Input() typeUser: any;

  ngOnInit(): void {
    this.checkUser();
    this.currenDate = new Date();
    this.user = this._onSession.onSession();
    if (this.typeUser.student) {
      this.addEventsCalendar(this.typeUser.arrayMeets.support, this.typeUser.arrayMeets.subject, this.typeUser.arrayMeets.owner);
    } else {
      this.handleEvents(this.user.codigo);
    }
  }

  checkUser() {
    let typeUser = this.typeUser;
    if (typeUser.student) {
      this.calendarOptions.selectMirror = false,
        this.calendarOptions.eventClick = this.reservation.bind(this);
    };
    if (typeUser.monitor || typeUser.tutor || typeUser.asesor) {
      this.calendarOptions.dateClick = this.createMonitory.bind(this);
      this.calendarOptions.eventClick = this.editMonitory.bind(this);
    };
  };

  reservation(clickInfo: EventClickArg) {
    let id: string = clickInfo.event._def.publicId;
    this.dialogConfig.disableClose = true;
    this.dialogConfig.data = {
      title: 'Reserva tu Monitoria',
      Modal: 'reservation',
      id: id
    };
    this.openModal();
  };

  async editMonitory(clickInfo: EventClickArg) {
    this.dialogConfig.disableClose = false;
    let titleModal: string;
    let id: string = clickInfo.event._def.publicId;
    if (this.typeUser.monitor) {
      this.supportId = 1;
      titleModal = 'Editar Monitoria';
    }
    if (this.typeUser.tutor) {
      this.supportId = 2;
      titleModal = 'Editar Tutoria';
    }
    if (this.typeUser.asesor) {
      this.supportId = 3;
      titleModal = 'Editar Asesoria';
    }

    let editObj = null;

    this._CalendarService.getAmeetById(id)
      .subscribe((res: any) => {

        let time = res.data.start_time.split('T')[1];
        editObj = {
          dateEdit: res.data.start_time.split('T')[0],
          timeEdit: time.split('.')[0],
          modeEdit: res.data.mode,
          subjectEdit: res.data.subjectDescription.subjectId.id,
          subjectDescEdit: res.data.subjectDescription.subjectId.description,
          roomEdit: res.data.roomDescription.classRoom
        };
        this.dialogConfig.data = {
          title: titleModal,
          Modal: 'edit',
          id: id,
          editObj: editObj
        };
        this.selectMeet = Number(id);
        this.openModal();
      });
  };

  createMonitory(selectInfo: any) {
    let date: Array<string> = this.chooseDate(selectInfo.dateStr);
    this.dialogConfig.disableClose = true;
    let titleModal: string;
    if (this.typeUser.monitor) {
      this.supportId = 1;
      titleModal = 'Crear una Monitoria'
    }
    if (this.typeUser.tutor) {
      this.supportId = 2;
      titleModal = 'Crear una Tutoria'
    }
    if (this.typeUser.asesor) {
      this.supportId = 3;
      titleModal = 'Crear una Asesoria'
    }

    this.dialogConfig.data = {
      title: titleModal,
      Modal: 'create',
      dateSelect: date
    };

    if (this.validatorDate(date)) {
      this.openModal();
    } else {
      this._AlertsService.errorAlert(`la fecha debe ser mayor al d??a de hoy ${this.currenDate.toLocaleDateString()}`);
    }
  }

  validatorDate(date: Array<string>): boolean {
    let response: boolean = true;
    let newDate: Date;
    let selectDate = date[0];
    if (date.length == 2) {
      let selectTime = date[1];
      newDate = new Date(`${selectDate}T${selectTime}`);
    } else {
      let hours: number = this.currenDate.getHours();
      let minute: number = this.currenDate.getMinutes();
      let seconds: number = this.currenDate.getSeconds();
      newDate = new Date(`${selectDate}T${hours}:${minute}:${seconds}`);
    }
    if (this.currenDate >= newDate) {
      response = false;
    };
    return response;
  }

  chooseDate(date: string): Array<string> {
    let responseDate: Array<string> = [];
    if (date.includes('T')) {
      responseDate = date.split('T');
      responseDate[1] = responseDate[1].split('-')[0];
    } else {
      responseDate.push(date);
    }
    return responseDate;
  }

  handleEvents(id: string) {
    let showData = [];
    this._calendarService.getMeetingsByUser(id)
      .subscribe((res: any) => {
        res.data[0].map((i: any) => {
          let newDate = new Date(i.start_time).getTime()+18000000; 
          let obj = {
            id: i.id,
            title: i.title,
            date: new Date(newDate)
          }
          showData.push(obj)
        })
        this.calendarOptions.events = showData;
      });
  }

  addEventsCalendar(support: string, subject: string, owner: string) {
    let showData = [];
    this.generalService.getMeetingsByOwner(support, subject, owner)
      .subscribe((res: any) => {
        res.data[0].map((i: any) => {
          let newDate = new Date(i.start_time).getTime()+18000000; 
          let obj = {
            id: i.id,
            title: i.title,
            date: new Date(newDate)
          }
          showData.push(obj)
        })
        this.calendarOptions.events = showData;
      });
  }

  openModal(): void {

    this.dialogConfig.autoFocus = true;
    let customWidth: string;

    if (window.innerWidth <= 600) {
      customWidth = '100%';
    } else {
      customWidth = '50%';
    }

    this.dialogConfig.width = customWidth;
    const dialogRef = this.dialog.open(ModalComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (typeof res != 'undefined') {
        if (res.optType === 'reservation') {
          let id = res.data.question.id;
          let image = res.data.uri;
          let question = res.data.question.question;
          image = image ? image : null;
          this._calendarService.uploadImage(id, question, image);
        }
        if (res.optType === 'edit') {
          let date: string = res.data.date;
          let time: string = res.data.time;
          let startDate = (new Date(`${date}T${time}`).getTime());
          let endDate = startDate + 3600000;
          let startMeet = new Date(startDate - 18000000);
          let endMeet = new Date(endDate - 18000000);
          let webexMeet = new mettingWebesDto();
          let title2 = (res.data.subject).split(',')[2];
          let title_ = title2.split(' ')[1];
          let title = title_ + ' de ' + (res.data.subject).split(',')[1];
          webexMeet.id = this.selectMeet;
          webexMeet.title = title;
          webexMeet.start_time = startMeet.toISOString();
          webexMeet.end_time = endMeet.toISOString();
          webexMeet.mode = res.data.mode;
          webexMeet.classRoom = res.data.room;
          webexMeet.idWebEx = '';
          webexMeet.subjectId = Number((res.data.subject).split(',')[0]);
          webexMeet.supportId = this.supportId;
          localStorage.setItem('newMeet', JSON.stringify(webexMeet));
          localStorage.setItem('typeWebEx', '1');
          if (!res.data.mode) {
            this._WebexService.getCode();
          } else {
            if (webexMeet.classRoom != null) {
              this._MeetsService.editAmeet()
                .subscribe((res: any) => {
                  let msgSnack: string;
                  switch (this.supportId) {
                    case 1:
                      msgSnack = 'monitoria';
                      break;
                    case 2:
                      msgSnack = 'tutoria';
                      break;
                    case 3:
                      msgSnack = 'asesoria';
                      break;
                    default:
                      break;
                  }
                  if (res.status == 200) {
                    this.handleEvents(this.user.codigo);
                    this._snackBar.open(`La ${msgSnack} fue editada con exito`, 'ok', {
                      horizontalPosition: 'end',
                      verticalPosition: 'top',
                      duration: 2000,
                      panelClass: ['succes-scanck-bar'],
                    });
                    localStorage.removeItem('newMeet');
                    window.location.reload();
                  } else {
                    this._snackBar.open(`No se pudo editar la ${msgSnack} seleccionada`, 'ok', {
                      horizontalPosition: 'end',
                      verticalPosition: 'top',
                      duration: 2000,
                      panelClass: ['error-scanck-bar'],
                    });
                  }
                });
            } else {
              this._AlertsService.errorAlert('El proceso se cancelo porque no ha ingresado un sal??n');
              localStorage.removeItem('newMeet');
            }
          }
        }
        if (res.optType === 'create') {
          let date: string = res.data.date;
          let time: string = res.data.time;
          let startDate = (new Date(`${date}T${time}:00`).getTime());
          let endDate = startDate + 3600000;
          let startMeet = new Date(startDate - 18000000);
          let endMeet = new Date(endDate - 18000000);
          let webexMeet = new mettingWebesDto();
          let title2 = (res.data.subject).split(',')[2];
          let title = title2.split(' ')[2];
          title = title + ' de ' + (res.data.subject).split(',')[1];
          webexMeet.title = title;
          webexMeet.start_time = startMeet.toISOString();
          webexMeet.end_time = endMeet.toISOString();
          webexMeet.mode = res.data.mode;
          webexMeet.classRoom = res.data.room;
          webexMeet.idWebEx = '';
          webexMeet.subjectId = Number((res.data.subject).split(',')[0]);
          webexMeet.supportId = this.supportId;
          localStorage.setItem('newMeet', JSON.stringify(webexMeet));
          localStorage.setItem('typeWebEx', '1');
          if (!res.data.mode) {
            this._WebexService.getCode();
          } else {
            if (webexMeet.classRoom != null) {
              this._MeetsService.createAnewMeet()
                .subscribe((res: any) => {
                  let msgSnack: string;
                  switch (this.supportId) {
                    case 1:
                      msgSnack = 'monitoria';
                      break;
                    case 2:
                      msgSnack = 'tutoria';
                      break;
                    case 3:
                      msgSnack = 'asesoria';
                      break;
                    default:
                      break;
                  }
                  if (res.status == 200) {
                    this.handleEvents(this.user.codigo);
                    this._snackBar.open(`La ${msgSnack} fue agregada con exito`, 'ok', {
                      horizontalPosition: 'end',
                      verticalPosition: 'top',
                      duration: 2000,
                      panelClass: ['succes-scanck-bar'],
                    });
                    localStorage.removeItem('newMeet');
                    window.location.reload();
                  } else {
                    this._snackBar.open(`No se pudo agregar la ${msgSnack}`, 'ok', {
                      horizontalPosition: 'end',
                      verticalPosition: 'top',
                      duration: 2000,
                      panelClass: ['error-scanck-bar'],
                    });
                  }
                });
            } else {
              this._AlertsService.errorAlert('El proceso se cancelo porque no ha ingresado un sal??n');
              localStorage.removeItem('newMeet');
            }
          }
        }
        if (res.optType === 'delete') {
          this._MeetsService.deleteAmeet(this.selectMeet)
            .subscribe((res: any) => {
              let msgSnack: string;
              switch (this.supportId) {
                case 1:
                  msgSnack = 'monitoria';
                  break;
                case 2:
                  msgSnack = 'tutoria';
                  break;
                case 3:
                  msgSnack = 'asesoria';
                  break;
                default:
                  break;
              }
              if (res.status == 200) {
                this.handleEvents(this.user.codigo);
                this._snackBar.open(`La ${msgSnack} fue eliminada con exito`, 'ok', {
                  horizontalPosition: 'end',
                  verticalPosition: 'top',
                  duration: 2000,
                  panelClass: ['succes-scanck-bar'],
                });
                window.location.reload();
              } else {
                this._snackBar.open(`No se pudo eliminar la ${msgSnack} selecccionada`, 'ok', {
                  horizontalPosition: 'end',
                  verticalPosition: 'top',
                  duration: 2000,
                  panelClass: ['error-scanck-bar'],
                });
              }
            })
        }
      }
    })
  }
}
