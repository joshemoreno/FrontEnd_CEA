import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  public materias: Array<string> =[
    "Fisica 1",
    "Fisica 2",
    "Matematicas"
  ];

  public opciones: Array<any> = [
    {opt:"Perfil",uri:"/home/monitor"},
    {opt:"Área personal",uri:"AreaPersonal"},
    {opt:"Gestión tutorias",uri:"GestionTutoria"},
    {opt:"Metricas",uri:"Metricas"},
    {opt:"Cerrar sesión",uri:"CerrarSesion"}
  ]

  ngOnInit(): void {
    console.log(this.materias);
  }

  check():boolean{
    return false;
  }

}
