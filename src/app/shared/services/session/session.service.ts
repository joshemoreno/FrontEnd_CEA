import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { currentUser } from '../../models/token.class';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {  }

  helper = new JwtHelperService();
  getStorege = (item:string) => localStorage.getItem(item) ? localStorage.getItem(item) : null; 

  checkSession(){
    let token = this.getStorege('Token');
    if(token){
      return !this.helper.isTokenExpired(token);
    }
    return false;
  }

  onSession():currentUser{
    let token = this.getStorege('Token');
    let user = new currentUser; 
    if(token){
      const decodedToken = this.helper.decodeToken(token);
      user.codigo=decodedToken.codigo;
      user.userName=`${decodedToken.name} ${decodedToken.last_name}`;
      user.email=decodedToken.email;
    }
    return user;
  }

}
