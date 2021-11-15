import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { subjectDto } from '../../models/subject.class';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  uriGetSubjects:string = '';
  uriCreateSubject:string = '';

  constructor(private http: HttpClient) {
    this.uriGetSubjects=`${environment.urlBack}${environment.subjectsEndpoint}`;
    this.uriCreateSubject=`${environment.urlBack}${environment.subjectsEndpoint}`;
  }

  getAllSubjects(){
    return this.http.get(this.uriGetSubjects);
  }

  createNewSubject(body:subjectDto){
    return this.http.post(this.uriCreateSubject,body,{observe: 'response'});
  }
  
  updateSubject(body:subjectDto){
    return this.http.put(`${this.uriCreateSubject}/${body.id}`,body,{observe: 'response'});
  }


}
