import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { reservationsObj } from '../../models/class/reservation.class';
import { GeneralService } from '../../services/general/general.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{

  public reservations:Array<any>=[];
  public reservationTitles:Array<any>=['Materia','Encargado','Fecha','Detalles','Acciones'];


  constructor(
    private _GeneralService: GeneralService,
    private _snackBar: MatSnackBar,
    ){

  }

  ngOnInit(): void {
    this.getReserves();
  }

  getReserves(){
    this._GeneralService.getAllReserves()
      .subscribe((res:any)=>{
        res.map((index)=>{
          let reservationObj = new reservationsObj();
          reservationObj.subjet=index.subject;
          reservationObj.owner=index.incharge;
          reservationObj.date=new Date(index.date).toLocaleString();
          reservationObj.detail=index.question;
          reservationObj.room=index.room;
          reservationObj.mode=index.mode;
          reservationObj.id=index.id;
          reservationObj.UriImage=index.UriImage;
          this.reservations.push(reservationObj);
        });
      })
  }

  getLink(reservation:reservationsObj){
    window.open(reservation.room,'_blank');
  }

  cancelReservation(reservation:any){
    this._GeneralService.deleteReservation(reservation.id)
      .subscribe((res:any)=>{
        if(res.status==200){
          this._snackBar.open('Su reserva a sido eliminada con exito', 'ok', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['succes-scanck-bar'],
          });
          window.location.reload();
        }else{
          this._snackBar.open('Se presento un problema al eliminar la reserva', 'ok', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['error-scanck-bar'],
          });
        }
      })
  }

}