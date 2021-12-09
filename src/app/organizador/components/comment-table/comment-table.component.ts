import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { GeneralService } from '../../services/general/general.service';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css']
})
export class CommentTableComponent implements OnInit {

  @Input() commentTable:any;

  public comments = [];
  

  constructor(
    private _GeneralService:GeneralService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments(){
    this._GeneralService.getAllComments()
      .subscribe((res:any)=>{
        console.log(res.comment);
        res.comment.map((index)=>{
          index.date=new Date(index.date).toLocaleDateString();
        })
        this.comments=res.comment;
      })
  }

  openModal(cod:number, desc:string):void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='50%';
    }  

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Comentarios y sugerencias',
      description: desc,
      Modal: 'read'
    }

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(typeof res != 'undefined'){
        this._GeneralService.readComment(cod)
          .subscribe((res:any)=>{
            if(res.status==200){
              this.getAllComments();
              this._snackBar.open(`Mensaje leido con exito`, 'ok', {
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
