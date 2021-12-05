import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { userDto } from '../../models/user.class';
import { PersonalComponent } from '../../pages/personal/personal.component';
import { PersonalService } from '../../services/personal/personal.service';

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
    private _PersonalComponent: PersonalComponent,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _PersonalService: PersonalService
  ) { }

  ngOnInit(): void {

    this.state = this.person.state;
    
    if(this.state===1){
      this.statusShow = "Activo";
    }else{
      this.statusShow = "Inactivo";
    }

  }

  changeRole(){
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
      title: 'Editar usuario',
      Modal: 'editUser',
      user: this.person
    }
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        let userEdit = new userDto;
        userEdit.cod=res.data.user;
        if(res.data.state){
          userEdit.status=1;
        }else{
          userEdit.status=2;
        }
        userEdit.role=Number(res.data.profile);
        this._PersonalService.editAUser(userEdit)
          .subscribe((res:any)=>{
            if(res.status==200){
              this._PersonalComponent.ngOnInit();
              this._snackBar.open('Usuario editado con exito', 'ok', {
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
