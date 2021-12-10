import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileInterface } from '../../models/file.interface';
import { finalize } from 'rxjs/operators';
import { requestReservation } from '../../models/reservationsDto';
import { GenericsService } from '../generics/generics.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { currentUser } from '../../models/token.class';
import { SessionService } from '../session/session.service';
import { WebexService } from '../webex/webex.service';
import { MeetsService } from 'src/app/monitor/services/meets/meets.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private filePath: any;
  private user: currentUser;

  constructor(
    private _storage:AngularFireStorage,
    private _genericService: GenericsService,
    private http : HttpClient,
    private _onSession: SessionService,
    private _WebexService: WebexService,
    private _MeetsService: MeetsService,
    ) { 
      this.user = this._onSession.onSession();
    }
    
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
      this.getAmeetById(reservation.id).subscribe((res:any)=>{
          if(res.data.mode){
            this._MeetsService.createReservetion(reservation)
              .subscribe((res:any)=>{
                console.log(res);
              })
          }else{
            let dtoJson={
              localId: res.data.roomDescription.id,
              idWebEx: res.data.roomDescription.idWebEx,
              email: this.user.email,
            }
            localStorage.setItem('typeWebEx', '2');
            localStorage.setItem('reservationDetail', JSON.stringify(reservation));
            localStorage.setItem('intationJson', JSON.stringify(dtoJson));
            this._WebexService.getCode();
          }
      })
    }

    getMeetingsByUser(id:string){
      let uriGetMeetingsByUser=`${environment.urlBack}${environment.getMeetingsByUser}/${id}`
      return this.http.get(uriGetMeetingsByUser);
    }

    getAmeetById(id:string){
      let uriGetAmeet:string=`${environment.urlBack}${environment.getOneMeet}/${id}`
      return this.http.get(uriGetAmeet);
    }



}
