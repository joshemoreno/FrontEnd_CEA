import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public descRoom: string = 'Virtual';
  public typeRoom: boolean = false;
  ModalType: string;
  ModalForm: FormGroup;
  comment: boolean = false;
  create: boolean = false;
  edit: boolean = false;
  read: boolean = false;
  reservation: boolean = false;
  status : boolean = false;
  newUser : boolean = false;
  
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
    @Inject(MAT_DIALOG_DATA) data:any) {  

      this.title = data.title;
      this.ModalType = data.Modal;
      this.user = data.user;
      this.ModalForm = this.FormDefault();

  }

  ngOnInit(): void {
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
    return new FormGroup({
      subject:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required]),
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
      question:new FormControl('',[Validators.required, Validators.minLength(30)]),
      file:new FormControl('')
    });
  }

  FormStatus(){
    return new FormGroup({
      confirm:new FormControl('',[Validators.required, Validators.minLength(this.user.length), Validators.maxLength(this.user.length)]),
    });
  }

  FormNewUser(){
    return new FormGroup({
      profile: new FormControl('',[Validators.required]),
      confirm:new FormControl('',[Validators.required, Validators.minLength(this.user.length), Validators.maxLength(this.user.length)]),
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


}
