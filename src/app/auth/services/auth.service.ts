import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestLogOn } from '../models/request.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {

  uriLogin = '';
  uriLogon = '';

  constructor(private http: HttpClient) {
    this.uriLogin = `${environment.urlBack}:${environment.portBack}${environment.loginEndpoint}`;
    this.uriLogon = `${environment.urlBack}:${environment.portBack}${environment.logonEndpoint}`;
   }

  logInUser(){
    return this.http.get(this.uriLogin)
    .subscribe((data:any)=>{
      window.location.replace(data.url);
    })
  }

  logOnUser(body: requestLogOn){
    return this.http.post(this.uriLogon,body);
  }

  logOutUser(){
    localStorage.clear();
    window.location.replace('');
  }
  


  }

