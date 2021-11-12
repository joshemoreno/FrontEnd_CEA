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
    let newBody = {
      title: body.title,
      start: body.start,
      end: body.end
    }
    const headers = new HttpHeaders({'Accept':'application/json', 'Authorization': `Bearer ${accessToken}`});
    return this.http.post(environment.uriCreateMeeting,newBody,{
      headers: headers,
      observe: 'response'
    });
  }

}
