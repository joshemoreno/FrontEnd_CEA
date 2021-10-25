import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  infoAlert(text:string, title:string=null):any{
   return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
      allowOutsideClick: false,
    });
  }

  confirmAlert(text:string, title:string=null, btnAcept:string, btnCancel:string){
    return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
      confirmButtonText: btnAcept,
      cancelButtonText: btnCancel,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      allowOutsideClick: false,
    });
  }
}
