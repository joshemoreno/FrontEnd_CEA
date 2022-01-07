import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  getAllComments(){
    let uriGetAllComment=`${environment.urlBack}${environment.getAllComment}`;
    return this.http.get(uriGetAllComment);
  }

  readComment(cod:number){
    let uriReadMessage=`${environment.urlBack}${environment.readComment}`;
    return this.http.put(`${uriReadMessage}/${cod}`,{status:true},{observe: 'response'});
  }

  deleteRequest(cod:string){
    let uriDelete=`${environment.urlBack}${environment.deleteUser}`;
    return this.http.delete(`${uriDelete}/${cod}`,{observe: 'response'});
  }


}
