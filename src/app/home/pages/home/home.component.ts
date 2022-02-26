import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _GeneralService:GeneralService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  openModal():void{

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
      title: 'Envía tu mensaje',
      Modal: 'comment'
    }

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        this._GeneralService.createComment(res.data.comment)
          .subscribe((res:any)=>{
            if(res.status==200){
              this._snackBar.open(`Gracias por ayudarnos a mejorar cada día más`, 'ok', {
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
