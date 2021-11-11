import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Access_token } from '../../models/webex/getAccessTokenDto.class';

@Injectable({
  providedIn: 'root'
})
export class WebexService {

  constructor(
    private http: HttpClient
  ) { }

  logIn(body:Access_token){
    return this.http.post(environment.uriAccessToken,body,{observe: 'response'});
  }

  createAmeeting(accessToken:string, body:string){
    const headers = new HttpHeaders({'Accept':'application/json', 'Authorization': `Bearer ${accessToken}`});
    return this.http.post(environment.uriCreateMeeting,body,{
      headers: headers,
      observe: 'response'
    });
  }

}
