import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AlertsService } from 'src/app/shared/services/alerts/alerts.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {

  @Input() tableProps: any;

  public roles=[
    {cod: 1, desc: "Estudiante"},
    {cod: 2, desc: "Monitor"},
    {cod: 3, desc: "Tutor"},
    {cod: 4, desc: "Asesor"},
    {cod: 5, desc: "Organizador"},
  ]

  public requests = [  
  {cod: 1 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 2 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 3 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 4 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 10 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 10 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 10 , user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
  {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00'},
]

  constructor(
    private _alert: AlertsService,
    public dialog: MatDialog
    ) { 

  }

  ngOnInit(): void {
  }


  acceptRequest(cod:number, user:string){
    this.openModal(cod,user);
  }

  cancelRequest(cod:number, user:string){
    this._alert.confirmAlert(`Seguro que desea cancelar la solicitud del usuario ${user}`,'','Sí','No')
    .then((res:any)=>{
      if(res.isConfirmed){
        console.log('chao'+cod)
      }
    })
  }

  openModal(cod:number, user:string):void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='50%';
    }  

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Acceptar nuevo usuario',
      Modal: 'newUser',
      user: user
    }

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        console.log(res, cod);
      }
    })
  }

}
