import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  createComment(comment:string){
    let uriCreateComment=`${environment.urlBack}${environment.createComment}`;
    let obj={
      description:comment
    }
    return this.http.post(uriCreateComment,obj,{observe: 'response'});
  }


}
