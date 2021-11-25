import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  uriSubjects:string = '';

  constructor(private http: HttpClient) {
    this.uriSubjects=`${environment.urlBack}${environment.getSubjectBySuport}`;
  }

  getAllSubjects(idSupport:number){
    return this.http.get(`${this.uriSubjects}/${idSupport}`);
  }


}
