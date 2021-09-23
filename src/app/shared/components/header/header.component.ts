import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: any;

  constructor(private router: Router, private _sessionService : SessionService, private _authService: AuthService) { }


  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  public opciones: Array<any> = [
    {opt:"Mis reservas",uri:"/home/estudiante/reservas"},
    {opt:"Gestión tutorias",uri:"GestionTutoria"},
    {opt:"Metricas",uri:"Metricas"}
  ]

  ngOnInit(): void {
    this.getCurrentUser();
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


}
