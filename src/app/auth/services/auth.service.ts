import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestLogOn } from '../models/request.class';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  logInUser(){
    return this.http.get('http://localhost:3000/auth/login')
    .subscribe((data:any)=>{
      window.location.replace(data.url);
    })
  }

  logOnUser(body: requestLogOn){
    return this.http.post('http://localhost:3000/auth/logon',body);
  }

  


  }

