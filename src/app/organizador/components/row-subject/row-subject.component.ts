import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { subjectDto } from '../../models/subject.class';
import { MetricsComponent } from '../../pages/metrics/metrics.component';
import { SubjectService } from '../../services/subject/subject.service';

@Component({
  selector: 'app-row-subject',
  templateUrl: './row-subject.component.html',
  styleUrls: ['./row-subject.component.css']
})
export class RowSubjectComponent implements OnInit {

  @Input() subjects:any;

  constructor(
    public dialog: MatDialog,
    private _subjectService: SubjectService,
    private _MetricsComponent: MetricsComponent,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

  }

  updateSubject(subject:any){
    this.openModal(subject);
  }

  openModal(subject:any):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let customWidth:string;

    if(window.innerWidth <= 600){
      customWidth='100%';
    }else{
      customWidth='50%';
    }  

    dialogConfig.width = customWidth;
    dialogConfig.data = {
      title: 'Editar asignatura',
      Modal: 'editSubject',
      subject:subject
    }
    
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res =>{
      if(res!=undefined){
        let body:subjectDto = new subjectDto();
        body.id = res.data.id;
        body.description = res.data.subjectName;
        this._subjectService.updateSubject(body)
        .subscribe((res:any)=>{          
          if(res.status==200){
            this._MetricsComponent.getAllSubjects();
            this._snackBar.open('Asignatura editada con exito', 'ok', {
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
