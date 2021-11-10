import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileInterface } from '../../models/file.interface';
import { take, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { requestReservation } from '../../models/reservationsDto';
import { GenericsService } from '../generics/generics.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private filePath: any;
  private urlDownload: any;

  constructor(
    private _storage:AngularFireStorage,
    private _genericService: GenericsService,
    private http : HttpClient,
    ) { }
    
    uploadImage(id:string, question:string, image:FileInterface){
      this._genericService.show();
      if(image!=undefined || image!=null){
        let currentDate:Date = new Date();
        let nameDir = currentDate.toISOString();
        nameDir = nameDir.split('T')[0];
        nameDir = nameDir.replace(/\//g,'-');
        this.filePath=`images/${nameDir}/${image.name}`;
        let fileRef = this._storage.ref(this.filePath);
        let task = this._storage.upload(this.filePath, image);
        task.snapshotChanges()
        .pipe(
          finalize(()=>{
            fileRef.getDownloadURL()
            .subscribe((uriImage:any)=>{
              let reservation = new requestReservation();
              reservation.id = id;
              reservation.question = question;
              reservation.uriImage = uriImage; 
              this.createReservation(reservation);
            })
          })
        ).subscribe();
      }else{
        let reservation = new requestReservation();
        reservation.id = id;
        reservation.question = question;
        reservation.uriImage = null; 
        this.createReservation(reservation);
      }
    }

    createReservation(reservation:requestReservation){
      this._genericService.hide();
      console.log(reservation)
    }

    getMeetingsByUser(id:string){
      return this.http.get(`https://ontosoft.herokuapp.com/api/Appoinments/users/${id}`)
    }

}
