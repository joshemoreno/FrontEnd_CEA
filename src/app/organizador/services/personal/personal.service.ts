import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userDto } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  uriGetPersonal='';
  uriPutPersonal='';
  uriGetInactive='';

  constructor(private http: HttpClient) {
    this.uriGetPersonal=`${environment.urlBack}${environment.usersByRole}`;
    this.uriPutPersonal=`${environment.urlBack}${environment.editProfile}`;
    this.uriGetInactive=`${environment.urlBack}${environment.inactiveUser}`;
  }

  getAllPersonal(role:number):Promise<any>{
    return this.http.get(`${this.uriGetPersonal}/${role}`).toPromise();
  }

  getPersonalInavtive(){
    return this.http.get(this.uriGetInactive);
  }

  editAUser(user:userDto){
    let edit={
      status:user.status,
      roles:{
        id:Number(user.role)
      }
    }
    return this.http.put(`${this.uriPutPersonal}/${user.cod}`,edit,{observe: 'response'});
  }


}
