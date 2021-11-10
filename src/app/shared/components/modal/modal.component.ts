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
  title: string;
  public user: string;
  public dateSelect: string;
  public descRoom: string = 'Virtual';
  public typeRoom: boolean = false;
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
    @Inject(MAT_DIALOG_DATA) data:any) {  
      this.title = data.title;
      this.ModalType = data.Modal;
      this.user = data.user;
      this.dateSelect = data.dateSelect;
      this.searchId = data.id;
      this.ModalForm = this.FormDefault();
  }
  

  ngOnInit(): void {
    this.subjects=[];
    if(this.ModalType == 'comment'){
      this.comment = true;
      this.ModalForm = this.FormComment();
    }
    if(this.ModalType == 'create'){
      this.create = true;
      this.ModalForm = this.FormCreate();
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
  }

  ngAfterContentInit(){
    setTimeout(()=>{
      this._SubjectService.getAllSubjects()
      .subscribe((res:any)=>{
        console.log(res.data);
        this.subjects = res.data ;
      });
    },0)
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
      room:new FormControl()
    });
  }

  FormEdit(){
    return new FormGroup({
      subject:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required]),
      room:new FormControl()
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

  changeRoom(){
    this.typeRoom = this.typeRoom ? false : true;
    this.descRoom = this.typeRoom ? 'Presencial' : 'Virtual'; 
    console.log(this.typeRoom);
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
    if(event.target.value.toLocaleUpperCase()==this.user.toLocaleUpperCase()){
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
