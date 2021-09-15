import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/student/services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: any;

  constructor(private router: Router, private _DataService: DataTransferService) { }


  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  public opciones: Array<any> = [
    {opt:"Perfil",uri:"/home/estudiante"},
    {opt:"Área personal",uri:"AreaPersonal"},
    {opt:"Gestión tutorias",uri:"GestionTutoria"},
    {opt:"Metricas",uri:"Metricas"}
  ]

  ngOnInit(): void {

  }

  logOut(){
    localStorage.clear();
    window.location.replace('');
  }

  goMonitory(codCourse:number){
    this.router.navigateByUrl(`home/estudiante/monitores?cod=${codCourse}`);
  }

  goTutory(codCourse:number){
    this.router.navigateByUrl(`home/estudiante/tutores?cod=${codCourse}`);
  }

  goAdvisory(codCourse:number, descCourse: string){
    this.router.navigateByUrl(`home/estudiante/profesionales?cod=${codCourse}&desc=${descCourse}`);
  }


}
