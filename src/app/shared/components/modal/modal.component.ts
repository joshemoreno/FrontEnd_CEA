import { AstVisitor } from '@angular/compiler';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { subjectDto } from 'src/app/organizador/models/subject.class';
import { SubjectService } from 'src/app/organizador/services/subject/subject.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public loading: boolean=false;
  private image: any;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  public title: string;
  public user: any;
  public subject: subjectDto;
  public dateSelect: string;
  public descRoom: string = 'Virtual';
  public typeRoom: boolean = false;
  public stateUser: number;
  public labelUser: String;
  public stateCheck: boolean;
  public count:number = 0;
  public disabled:boolean = true;
  public disabledRole:boolean = true;
  public cssBorder: string = '#E85757 solid';
  public roleSelect: string = '';
  searchId: string = '';
  ModalType: string;
  ModalForm: FormGroup;
  comment: boolean = false;
  create: boolean = false;
  edit: boolean = false;
  read: boolean = false;
  reservation: boolean = false;
  status : boolean = false;
  newUser : boolean = false;
  editSubject : boolean = false;
  editUser : boolean = false;
  
  public subjects: Array<subjectDto>=[];

  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];


  public roles=[
    {cod: 1, desc: "Estudiante"},
    {cod: 2, desc: "Monitor"},
    {cod: 3, desc: "Tutor"},
    {cod: 4, desc: "Asesor"},
    {cod: 5, desc: "Organizador"},
  ]
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private _SubjectService: SubjectService,
    private _AlertsService: AlertsService,
    @Inject(MAT_DIALOG_DATA) data:any) {  
      this.title = data.title;
      this.ModalType = data.Modal;
      this.user = data.user;
      this.dateSelect = data.dateSelect;
      this.searchId = data.id;
      this.subject = data.subject;
      this.ModalForm = this.FormDefault();
  }
  

  ngOnInit(): void {
    this.subjects=[];
    if(this.ModalType == 'comment'){
      this.comment = true;
      this.ModalForm = this.FormComment();
    }
    if(this.ModalType == 'create'){
      let currenDate = new Date();
      let newDate:Date;
      let selectDate = this.dateSelect[0]; 
      if(this.dateSelect.length==2){
        let selectTime = this.dateSelect[1];
        newDate = new Date(`${selectDate}T${selectTime}`);
      }else{
        let hours:number = currenDate.getHours();
        let minute:number = currenDate.getMinutes();
        let seconds:number = currenDate.getSeconds();
        newDate = new Date(`${selectDate}T${hours}:${minute}:${seconds}`);
      }
      if(currenDate>=newDate){
        setTimeout(()=>{
          this.dialogRef.close();
          this._AlertsService.errorAlert(`la fecha debe ser mayor a ${currenDate.toLocaleString()}`);
        },0);
      }else{
        this.create = true;
        this.ModalForm = this.FormCreate();
      }
    }
    if(this.ModalType == 'edit'){
      this.edit = true;
      this.ModalForm = this.FormEdit();
    }
    if(this.ModalType == 'reservation'){
      this.reservation = true;
      this.ModalForm = this.FormReservation();
    }
    if(this.ModalType == 'status'){
      this.status = true;
      this.ModalForm = this.FormStatus();
    }
    if(this.ModalType == 'newUser'){
      this.newUser = true;
      this.ModalForm = this.FormNewUser();
    }
    if(this.ModalType == 'editSubject'){
      this.editSubject = true;
      this.ModalForm = this.FormEditSubject();
    }
    if(this.ModalType == 'editUser'){
      this.stateUser = this.user.state;
      if(this.stateUser==1){
        this.stateCheck = true;
        this.labelUser = 'Activo';
      }else{
        this.stateCheck = false;
        this.labelUser = 'Inactivo';
      }
      this.editUser = true;
      this.ModalForm = this.FormEditUser();
    }
  }

  convertDateFormat(string) {
    var info = string.split('-').reverse().join('-');
    return info;
  }

  ngAfterContentInit(){
    if(this.ModalType == 'create' || this.ModalType == 'edit'){
      setTimeout(()=>{
        this._SubjectService.getAllSubjects()
        .subscribe((res:any)=>{
          this.subjects = res.data ;
        });
      },0)
    }
  }

  onSubmitForm(optType:string='') {
    let dto:{};
    if(optType=='reservation'){
      dto ={
        optType: optType,
        data:{
          question: this.ModalForm.value,
          uri: this.image 
        }
      }
    }else{
      dto ={
        optType: optType,
        data:this.ModalForm.value
      }
    }
      this.dialogRef.close(dto);
  } 

  close() {
      this.dialogRef.close();
  }

  FormDefault(){
    return new FormGroup({});
  }

  FormComment(){
    return new FormGroup({
      comment:new FormControl('',[Validators.required, Validators.minLength(30)])
    });
  }

  FormCreate(){
    let date:string='';
    let time:string='';
    date = this.dateSelect[0];
    if(this.dateSelect.length==2){
      time = this.dateSelect[1];
    }
    return new FormGroup({
      subject:new FormControl('',[Validators.required]),
      date:new FormControl(date,[Validators.required]),
      time:new FormControl(time,[Validators.required]),
      room:new FormControl(),
      mode:new FormControl(false)
    });
  }

  FormEdit(){
    return new FormGroup({
      subject:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required]),
      room:new FormControl(),
      mode:new FormControl(false)
    });
  }

  FormReservation(){
    return new FormGroup({
      id: new FormControl(this.searchId),
      question:new FormControl('',[Validators.required, Validators.minLength(30)]),
      file:new FormControl('')
    });
  }

  FormStatus(){
    return new FormGroup({
      confirm:new FormControl('',[Validators.required]),
    });
  }

  FormNewUser(){
    return new FormGroup({
      profile: new FormControl('',[Validators.required])
    });
  }

  FormEditSubject(){
    return new FormGroup({
      subjectName: new FormControl('',[Validators.required]),
      id: new FormControl(this.subject.id)
    });
  }

  FormEditUser(){
    return new FormGroup({
      user: new FormControl(this.user.id),
      profile: new FormControl('',[Validators.required]),
      state: new FormControl(this.stateUser)
    });
  }

  changeRoom(){
    this.typeRoom = this.typeRoom ? false : true;
    this.descRoom = this.typeRoom ? 'Presencial' : 'Virtual'; 
  }

  changeState(){
    if(this.stateUser==1){
      this.stateUser=2;
      this.labelUser = 'Inactivo';
    }else{
      this.labelUser = 'Activo';
      this.stateUser=1;
    }
  }

  handleImage(event:any):void{
    this.image = event.target.files[0];
  }

  countChart(event:any){
    let input:string = event.target.value; 
    this.count = input.length;
  }

  validatorRole(event:any){
    this.roleSelect=event.target.value;
    if(this.roleSelect!=''){
      this.disabledRole = false;
    }else{
      this.disabledRole = true;
    }
  }

  validatorRead(event:any){
    if(event.target.value.toLocaleUpperCase()==this.user.name.toLocaleUpperCase()){
      if(!this.disabledRole){
        this.disabled = false;
      }
      this.cssBorder = '#9DD543 solid';
    }else{
      this.disabled = true;
      this.cssBorder = '#E85757 solid';
    }
  }


}
