import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataTransferService } from 'src/app/student/services/data-transfer.service';
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
    let res = this.prepareData(descCourse);
    this.router.navigateByUrl(`home/estudiante/monitores?cod=${codCourse}&desc=${res}`);
  }

  goTutory(codCourse:number, descCourse: string){
    let res = this.prepareData(descCourse);
    this.router.navigateByUrl(`home/estudiante/tutores?cod=${codCourse}&desc=${res}`);
  }

  goAdvisory(codCourse:number, descCourse: string){
    let res = this.prepareData(descCourse);
    this.router.navigateByUrl(`home/estudiante/profesionales?cod=${codCourse}&desc=${res}`);
  }


}
