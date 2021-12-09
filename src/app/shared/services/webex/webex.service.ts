import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Access_token, mettingWebesDto } from '../../models/webex/getAccessTokenDto.class';

@Injectable({
  providedIn: 'root'
})
export class WebexService {

  constructor(
    private http: HttpClient
  ) { }

  getCode(){
    window.location.replace(environment.uriGetCode);
  }

  logIn(body:Access_token){
    return this.http.post(environment.uriAccessToken,body,{observe: 'response'});
  }

  createAmeeting(accessToken:string, body:mettingWebesDto){
    let starDate = new Date (body.start_time).getTime();
    let endDate = new Date (body.end_time).getTime();
    let newStarDate = new Date(starDate+18000000);
    let newendDate = new Date(endDate+18000000);
    let newBody = {
      title: body.title,
      start: newStarDate,
      end: newendDate
    }
    const headers = new HttpHeaders({'Accept':'application/json', 'Authorization': `Bearer ${accessToken}`});
    return this.http.post(environment.uriCreateMeeting,newBody,{
      headers: headers,
      observe: 'response'
    });
  }
  
  createAInvitantion(dtoJson:any,accessToken:string){
    let newBody = {
      email: dtoJson.email,
      meetingId: dtoJson.idWebEx,
      sendEmail: true,
      coHost: false
    }
    const headers = new HttpHeaders({'Accept':'application/json', 'Authorization': `Bearer ${accessToken}`});
    return this.http.post(environment.uriMeetingInvitees,newBody,{
      headers: headers,
      observe: 'response'
    });
    
  }

}
