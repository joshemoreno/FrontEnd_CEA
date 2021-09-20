import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: string;
  ModalType: string;
  ModalForm: FormGroup;
  comment: boolean = false;
  create: boolean = false;
  edit: boolean = false;
  read: boolean = false;
  reservation: boolean = false;
  
  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {  

      this.title = data.title;
      this.ModalType = data.Modal;
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
  }

  onSubmitForm(optType:string) {
      let dto ={
        optType: optType,
        data:this.ModalForm.value
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
      time:new FormControl('',[Validators.required])
    });
  }

  FormEdit(){
    return new FormGroup({
      subject:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      time:new FormControl('',[Validators.required])
    });
  }

  FormReservation(){
    return new FormGroup({
      question:new FormControl('',[Validators.required, Validators.minLength(30)]),
      file:new FormControl()
    });
  }




}
