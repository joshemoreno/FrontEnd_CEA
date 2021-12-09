import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/monitor/services/general/general.service';
import { reservationsObj } from '../../models/class/reservation.class';


@Component({
  selector: 'app-tutor-reservations',
  templateUrl: './tutor-reservations.component.html',
  styleUrls: ['./tutor-reservations.component.css']
})
export class TutorReservationsComponent implements OnInit {

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

  cancelReservation(cod:number){
    console.log(cod);
  }

}
