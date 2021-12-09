import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient
    ) { }

  getProfile(id:string){
    let uriGetProfile=`${environment.urlBack}${environment.getProfile}/${id}`;
    return this.http.get(uriGetProfile);
  }

  editProfile(id:string,body:any){
    let uriGetProfile=`${environment.urlBack}${environment.editProfile}/${id}`;
    return this.http.put(uriGetProfile,body,{observe: 'response'});
  }

  getAllReserves(){
    let uriGetAllReserves = `${environment.urlBack}${environment.getAllReserve}`;
    return this.http.get(uriGetAllReserves);
  }
}
