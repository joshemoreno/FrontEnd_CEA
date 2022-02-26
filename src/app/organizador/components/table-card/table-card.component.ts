import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AlertsService } from 'src/app/shared/services/alerts/alerts.service';
import { requestDto } from '../../models/requests.class';
import { userDto } from '../../models/user.class';
import { PersonalComponent } from '../../pages/personal/personal.component';
import { GeneralService } from '../../services/general/general.service';
import { PersonalService } from '../../services/personal/personal.service';

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
  public requests:Array<requestDto>=[];

  constructor(
    private _PersonalComponent: PersonalComponent,
    private _snackBar: MatSnackBar,
    private _alert: AlertsService,
    public dialog: MatDialog,
    private _PersonalService:PersonalService,
    private _GeneralService:GeneralService
    ) { 

  }

  ngOnInit(): void {
    this.getUserIncative();
  }

  getUserIncative(){
    this._PersonalService.getPersonalInavtive()
      .subscribe((res:any)=>{
        res.data.map((index)=>{
          let userList = new requestDto();
          userList.codigo=index.codigo;
          userList.date= new Date(index.createdAt).toLocaleString();
          userList.name=`${index.name} ${index.last_name}`;
          this.requests.push(userList);
        });
      });
  }  


  acceptRequest(cod:string, name:string){
    this.openModal(cod,name);
  }

  cancelRequest(cod:string, name:string){
    this._alert.confirmAlert(`Seguro que desea cancelar la solicitud del usuario ${name}`,'','Sí','No')
    .then((res:any)=>{
      if(res.isConfirmed){
        this._GeneralService.deleteRequest(cod)
          .subscribe((res:any)=>{
            if(res.status==200){
              window.location.reload();
              this._snackBar.open('La solicitud ha sido rechada con exito', 'ok', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
                duration: 2000,
                panelClass: ['succes-scanck-bar'],
              });
            }
          })
      }
    })
  }

  openModal(cod:string, name:string):void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='50%';
    }  

    let user={
      codigo:cod,
      name:name
    }

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Aceptar nuevo usuario',
      Modal: 'newUser',
      user: user
    }

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        let editUser = new userDto();
        editUser.cod=cod;
        editUser.role=res.data.profile;
        editUser.status=1;
        this._PersonalService.editAUser(editUser)
          .subscribe((res:any)=>{
            if(res.status==200){
              window.location.reload();
              this._snackBar.open('Usuario agregado con exito', 'ok', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
                duration: 2000,
                panelClass: ['succes-scanck-bar'],
              });
            }
          })
      }
    })
  }

}
