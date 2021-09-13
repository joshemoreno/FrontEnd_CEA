import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getStorege = (item:string) => localStorage.getItem(item) ? localStorage.getItem(item) : null; 

  checkToken(){
    let token = this.getStorege('Token');
    if(token==null){
      return false
    }
    return true;
  }

}
