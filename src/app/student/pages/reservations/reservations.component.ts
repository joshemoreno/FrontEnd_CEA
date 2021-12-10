import { Component, OnInit } from '@angular/core';
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
    private _GeneralService: GeneralService
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
          this.reservations.push(reservationObj);
        });
      })
  }

  getLink(cod:number){
    console.log(cod);
  }

  cancelReservation(reservation:any){
    console.log(reservation);
    
    // this._GeneralService.deleteReservation
    
  }

}