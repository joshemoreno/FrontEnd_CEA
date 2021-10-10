import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
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
]

  constructor(
    private _alert: AlertsService,
    public dialog: MatDialog
    ) { 
    this.newUserForm = this.createFormGroup();
  }

  displayedColumns: string[] = ['date', 'user', 'profile', 'Accions'];
  dataSource = new MatTableDataSource(this.requests);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  newUserForm: FormGroup;

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createFormGroup(){
    return new FormGroup({
      profile:new FormControl('')
    });
  }

  acceptRequest(cod:number){
    if(this.newUserForm.value.profile != ''){
      console.log(cod + JSON.stringify(this.newUserForm.value));
    }else{
      this._alert.infoAlert('No se puede aceptar a un nuevo usuario sin asignarle un role');
    }
  }

  cancelRequest(cod:number, user:string){
    this._alert.confirmAlert(`Seguro que desea cancelar la solicitud del usuario ${user}`,'','Sí','No')
    .then((res:any)=>{
      if(res.isConfirmed){
        console.log('chao')
      }
    })
  }

}
