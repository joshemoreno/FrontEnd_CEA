import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralService } from 'src/app/monitor/services/general/general.service';
import { currentUser } from 'src/app/shared/models/token.class';
import { CalendarService } from 'src/app/shared/services/calendar/calendar.service';
import { SessionService } from 'src/app/shared/services/session/session.service';

@Component({
  selector: 'app-asesor-organizer',
  templateUrl: './asesor-organizer.component.html',
  styleUrls: ['./asesor-organizer.component.css']
})
export class AsesorOrganizerComponent implements OnInit {

  public materias: Array<any> =[];

  public HourCountDis = 0;
  public HourCountReservation = 0;

  public typeUser:{};
  public editMyData = false;
  private user: currentUser;
  public owner: currentUser;

  constructor(
    private _onSession: SessionService,
    private _GeneralService: GeneralService,
    private _snackBar: MatSnackBar,
    private _calendarService: CalendarService,
  ) {
    this.user = this._onSession.onSession();
    this.owner = {
      userName: '', 
      email: '',
      tel: null, 
      about: '', 
      uriProfile: ''
    }
    this.dataForm = this.FormDefault();
  }

  createFormGroup(){
    return new FormGroup({
      phone:new FormControl(this.owner.tel),
      skills: new FormControl(this.owner.about)
    });
  }

  FormDefault(){
    return new FormGroup({});
  }

  dataForm: FormGroup;

  ngOnInit(): void {
    this.getProfile();
    this.getMeetDetail();
    this.getSubjectList();
    this.typeUser={
      student: false,
      monitor:false,
      tutor:false,
      asesor: true
    };
  }

  getMeetDetail(){
    this._calendarService.getMeetingsByUser(this.user.codigo)
    .subscribe((res: any) => {
      this.HourCountDis=res.data[1];
    });
  }

  getProfile(){
    this._GeneralService.getProfile(this.user.codigo)
      .subscribe((res:any)=>{
        this.owner.userName = `${res.data.name} ${res.data.last_name}`;
        this.owner.email=res.data.email;
        this.owner.uriProfile=res.data.imageURI;
        this.owner.about=res.data.about;
        this.owner.tel=res.data.phone;
      });
  }

  editData(){
    this.editMyData=true;
    this.dataForm = this.createFormGroup();
  }

  saveData(){
    let request = this.dataForm.value;
    let body={
      phone: (request.phone).toString(),
      about: request.skills
    };
    this._GeneralService.editProfile(this.user.codigo,body)
      .subscribe((res:any)=>{
        if(res.status==200){
          this.getProfile();
          this._snackBar.open(`Su información a sido actualizada con exito`, 'ok', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['succes-scanck-bar'],
          });
        }else{
          this.getProfile();
          this._snackBar.open(`Se presento un problema al intentar actualizar`, 'ok', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['error-scanck-bar'],
          });
        }
      })
    this.editMyData=false;
  }

  getSubjectList(){
    this._GeneralService.getSubjectList()
      .subscribe((res:any)=>{
        this.materias=res;
      });

    this._GeneralService.getCountReserve()
      .subscribe((res:any)=>{
        this.HourCountReservation=res;
      })
  }

}
