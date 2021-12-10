import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getPersonsBySupport(support:number,subject:number){
    let uriGetPersons = `${environment.urlBack}${environment.getPersonalBySupport}`
    return this.http.get(`${uriGetPersons}/${support}/${subject}`);
  }
  
  getDetailUser(cod:string){
    let uriGetDetail = `${environment.urlBack}${environment.getProfile}`
    return this.http.get(`${uriGetDetail}/${cod}`);  
  }
  
  getMeetingsByOwner(support:string,subject:string,codUser:string){
    let uriGetDetail = `${environment.urlBack}${environment.getMeetingsByUser}`;
    return this.http.get(`${uriGetDetail}/${support}/${subject}/${codUser}`);    
  }

  getAllReserves(){
    let uriGetAllReserves = `${environment.urlBack}${environment.getAllReserve}`;
    return this.http.get(uriGetAllReserves);
  }

  deleteReservation(){
    let uriDeleteReservation=`${environment.urlBack}${environment.deleteReserve}`;
    return this.http.delete(uriDeleteReservation);
  }


}
