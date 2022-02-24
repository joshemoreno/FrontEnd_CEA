import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mettingWebesDto } from 'src/app/shared/models/webex/getAccessTokenDto.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetsService {

  uriCreateMeet:string='';
  uriEditMeet:string='';

  constructor(private http: HttpClient) {
    this.uriCreateMeet=`${environment.urlBack}${environment.createMeeting}`;
    this.uriEditMeet=`${environment.urlBack}${environment.editAMeet}`;
  }

  createAnewMeet(){
    let body:mettingWebesDto = JSON.parse(localStorage.getItem('newMeet'));
    return this.http.post(this.uriCreateMeet,body,{observe: 'response'})
  }
  
  editAmeet(){
    let body:mettingWebesDto = JSON.parse(localStorage.getItem('newMeet'));
    return this.http.put(`${this.uriEditMeet}/${body.id}`,body,{observe: 'response'})
  }

  deleteAmeet(id:number){
    let uriDeleteAmeet:string=`${environment.urlBack}${environment.deleteAmeet}/${id}`;
    return this.http.delete(uriDeleteAmeet,{observe: 'response'});
  }

  createReservetion(reservationDetail:any){
    let dto={
      meetingId: Number (reservationDetail.id),
      uri: reservationDetail.uriImage,
      question: reservationDetail.question
    }
    let uriCreateReservation:string=`${environment.urlBack}${environment.createReserve}`;
    return this.http.post(uriCreateReservation,dto,{observe: 'response'});
  }

}
