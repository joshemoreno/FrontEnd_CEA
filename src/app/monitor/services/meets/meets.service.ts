import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mettingWebesDto } from 'src/app/shared/models/webex/getAccessTokenDto.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetsService {

  uriCreateMeet:string='';

  constructor(private http: HttpClient) {
    this.uriCreateMeet=`${environment.urlBack}${environment.createMeeting}`;
  }

  createAnewMeet(){
    let body:mettingWebesDto = JSON.parse(localStorage.getItem('newMeet'));
    return this.http.post(this.uriCreateMeet,body,{observe: 'response'})
  }
}
