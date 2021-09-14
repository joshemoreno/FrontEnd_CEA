import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';

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
    {opt:"Metricas",uri:"Metricas"}
  ]

  ngOnInit(): void {

  }

  logOut(){
    localStorage.clear();
    window.location.replace('');
  }

}
