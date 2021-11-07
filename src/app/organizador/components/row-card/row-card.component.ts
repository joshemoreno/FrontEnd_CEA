import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {

  @Input() person: any;

  public statusShow: string = 'Activo';
  public state: number = 2;
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.state = this.person.state;
    
    if(this.state===1){
      this.statusShow = "Activo";
    }else{
      this.statusShow = "Inactivo";
    }

  }

  changeStatus(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='30%';
    }  

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Cambio de estado',
      Modal: 'status',
      user: this.person.name
    }

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(typeof res != 'undefined'){
          this.state = this.state ? 2 : 1;
          this.statusShow = this.statusShow ? 'Inactivo' : 'Activo';
          console.log(this.state + this.statusShow)
      }
    })
  }

  changeRole(){
    console.log(this.person);
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='30%';
    }  

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Acceptar nuevo usuario',
      Modal: 'newUser',
      user: this.person.name
    }
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        console.log(res);
          // this.state = this.state ? 2 : 1;
          // this.statusShow = this.statusShow ? 'Inactivo' : 'Activo';
          // console.log(this.state + this.statusShow)
      }
    })
  }

}
