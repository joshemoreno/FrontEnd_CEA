import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { subjectDto } from 'src/app/organizador/models/subject.class';
import { SubjectService } from 'src/app/organizador/services/subject/subject.service';
import { AlertsService } from '../../services/alerts/alerts.service';

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
  public descRoom: string='Virtual';
  public typeRoom: boolean;
  public stateUser: number;
  public labelUser: String;
  public stateCheck: boolean;
  public count:number = 0;
  public disabled:boolean = true;
  public disabledRole:boolean = true;
  public cssBorder: string = '#E85757 solid';
  public roleSelect: string = '';
  public today:string;
  public editObj:any;
  public description:any;
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

  public roles=[
    {cod: 1, desc: "Estudiante"},
    {cod: 2, desc: "Monitor"},
    {cod: 3, desc: "Tutor"},
    {cod: 6, desc: "Asesor"},
    {cod: 4, desc: "Organizador"},
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
      this.editObj = data.editObj;
      this.description = data.description;
      this.ModalForm = this.FormDefault();
  }
  

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
    this.subjects=[];
    
    setTimeout(()=>{
    if(this.ModalType == 'comment'){
      this.comment = true;
      this.ModalForm = this.FormComment();
    }
    if(this.ModalType == 'create'){
        this.create = true;
        this.ModalForm = this.FormCreate();
    }
    if(this.ModalType == 'edit'){
      this.typeRoom = this.editObj.modeEdit;
      if(this.typeRoom){
        this.descRoom='Presencial';
      }
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
    if(this.ModalType == 'read'){
      this.read = true;
    }
    if(this.ModalType == 'editUser'){
      
      this.stateUser = this.user.status;
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
    },2);
  }

  ngAfterContentInit() {
    if (this.ModalType == 'create' || this.ModalType == 'edit') {
      setTimeout(() => {
        this._SubjectService.getAllSubjects()
          .subscribe((res: any) => {
            this.subjects = res.data;
          });
      }, 0)
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
    let showRoom:string;
    if(this.editObj.modeEdit){
      showRoom = this.editObj.roomEdit;
    }
    return new FormGroup({
      subject:new FormControl(`${this.editObj.subjectEdit},${this.editObj.subjectDescEdit},${this.title}`,[Validators.required]),
      date:new FormControl(this.editObj.dateEdit,[Validators.required]),
      time:new FormControl(this.editObj.timeEdit,[Validators.required]),
      room:new FormControl(showRoom),
      mode:new FormControl(this.editObj.modeEdit)
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
    this.disabledRole=false;
    return new FormGroup({
      user: new FormControl(this.user.codigo),
      profile: new FormControl((this.user.roles.id).toString(),[Validators.required]),
      state: new FormControl(this.stateCheck)
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
