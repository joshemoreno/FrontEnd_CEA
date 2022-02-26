import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { exportFileDto } from '../../models/export/export.model';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {
  uriExport = '';
  isLoading$ = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.uriExport = `${environment.urlBack}${environment.generateXls}`;
  }

  show(): void {
    this.isLoading$.next(true);
  };
  hide(): void {
    this.isLoading$.next(false);
  };

  generateXls(filter:exportFileDto) {
    return this.http.post(this.uriExport, filter,{observe: 'response'});
  }
}
