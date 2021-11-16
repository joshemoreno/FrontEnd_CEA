import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  uriGetPersonal='';

  constructor(private http: HttpClient) {
    this.uriGetPersonal=`${environment.urlBack}${environment.usersByRole}`
  }

  getAllPersonal(role:number):Promise<any>{
    return this.http.get(`${this.uriGetPersonal}/${role}`).toPromise();
  }


}
