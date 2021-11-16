import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public tableProps = {
    title: 'Solicitudes',
    firstColum: 'Fecha',
    secondColum: 'Usuario',
    thirdColum: 'Acciones',
    firstBottom: 'Aceptar',
    secondBottom: 'Cancelar'
  }

  public cards=[
    {
      title:"Monitores",
      person: []
    },
    {
      title:"Tutores",
      person: []
    },
    {
      title:"Estudiantes",
      person: []
    },
    {
      title:"Asesores",
      person: []
    },
  ]
  

  constructor(private _PersonalService: PersonalService) { }

  ngOnInit(): void {
      this.getAllMonitores(1);
      this.getAllTutores(2);
      this.getAllEstudiantes(3);
      this.getAllAsesores(5);
  }

  ngAfterContentInit(){
    // this.cards[0].person = this.getAllMonitores();
    // console.log(this.cards);
  }


  getAllMonitores(role:number){
    let response = [];
    this._PersonalService.getAllPersonal(role)
    .then((res:any)=>{
      console.log(res);
      this.cards[0].person = res.data
      response = res.data;
    })
  }

  getAllTutores(role:number){
    let response = [];
    this._PersonalService.getAllPersonal(role)
    .then((res:any)=>{
      console.log(res);
      this.cards[1].person = res.data
      response = res.data;
    })
  }

  getAllEstudiantes(role:number){
    let response = [];
    this._PersonalService.getAllPersonal(role)
    .then((res:any)=>{
      console.log(res);
      this.cards[2].person = res.data
      response = res.data;
    })
  }

  getAllAsesores(role:number){
    let response = [];
    this._PersonalService.getAllPersonal(role)
    .then((res:any)=>{
      console.log(res);
      this.cards[3].person = res.data
      response = res.data;
    })
  }

}
