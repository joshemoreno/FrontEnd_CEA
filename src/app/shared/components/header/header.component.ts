import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { SessionService } from '../../services/session/session.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: any;

  constructor(private _alertService: AlertsService, private _sessionService : SessionService, private _authService: AuthService) { }


  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  public opciones: Array<any> = [
    {opt:"Mis reservas",uri:"/home/estudiante/reservas"},
    {opt:"Gestión monitorias",uri:"/home/monitor/monitorias"},
    {opt:"Gestión tutorias",uri:"/home/tutor/tutorias"},
    {opt:"Metricas",uri:"Metricas"}
  ]

  ngOnInit(): void {

    this.getCurrentUser();
    const checkSession = interval(10000);
    checkSession.subscribe(()=>{
      this._sessionService.checkSession() ? null : this.openAlert();
    });
  }

  goHome(){
    window.location.replace('/home');
  }

  logOut(){
    this._authService.logOutUser();
  }

  prepareData(data:string):string{
    let res = data.replace(' ','_');
    return res;
  }

  getCurrentUser(){
    let user = this._sessionService.onSession();
    return user.userName;
  }

  goMonitory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse}));
    window.location.replace('home/estudiante/monitores');
  }

  goTutory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse}));
    window.location.replace('home/estudiante/tutores');
  }

  goAdvisory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse}));
    window.location.replace('home/estudiante/profesionales');
  }

  openAlert(){
    this._alertService.confirmAlert(`${this.getCurrentUser().toLowerCase()} su sesión a terminado si desea volver a ingresar presione "Volver a cargar"`,null,'Volver a cargar', 'Salir')
    .then((res:any)=>{
      if(res.isConfirmed){
        localStorage.clear();
        this._authService.logInUser();
      }else{
        this._authService.logOutUser();
      }
    });
  }

}
