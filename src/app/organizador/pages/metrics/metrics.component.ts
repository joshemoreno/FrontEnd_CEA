import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor() { }

  public createBtn = false;
  public textShow = '';

  public cards = [
    {
      title: 'Demanda de tutorias'
    },
    {
      title: 'Demanda de monitorias'
    },
    {
      title: 'Demanda de asesorias'
    },
  ]

  public subjectCard = {
    title: 'Asignaturas',
    subject: [

    ]
  }

  responseSubject = [
    {
      id:1,
      name:"Fisica 1",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:2,
      name:"Fisica 2",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:3,
      name:"desarrollo de ciudades inteligentes",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:4,
      name:"Matematicas fundamentales",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:1,
      name:"Fisica 1",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:2,
      name:"Fisica 2",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:3,
      name:"Fisica 3",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:4,
      name:"Matematicas",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:1,
      name:"Fisica 1",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:2,
      name:"Fisica 2",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:3,
      name:"Fisica 3",
      owner:"Jose Antonio Moreno Popyan"
    },
    {
      id:4,
      name:"Matematicas",
      owner:"Jose Antonio Moreno Popyan"
    },
  ]

  public commentTable = {
    title: 'Comentarios y sugerencias',
    firstColum: 'Fecha',
    secondColum: 'Usuario',
    thirdColum: 'Comentario',
    fourColum: 'Acciones',
    firstBottom: 'Aceptar',
    secondBottom: 'Cancelar'
  }

  public surveyTable = {
    title: 'Encuesta de satisfacción',
    firstColum: 'Fecha',
    secondColum: 'Usuario',
    thirdColum: 'Comentario',
    fourColum: 'Acciones',
    firstBottom: 'Aceptar',
    secondBottom: 'Cancelar'
  }

  ngOnInit(): void {
    this.subjectCard.subject = this.responseSubject;
  }

  search(event:any){
    let inputText:string;
    if((event.target.value).length === 0){
      this.subjectCard.subject = this.responseSubject;
    }else{
      inputText = event.target.value;
      let expresion = new RegExp(`${inputText}.*`, "i");
      let filterSubject = this.responseSubject.filter(subject => expresion.test(subject.name)); 
      this.subjectCard.subject = filterSubject;
    }
    if ((this.subjectCard.subject).length === 0){
      this.createBtn = true;
      this.textShow = inputText;
    }else{
      this.createBtn = false;
    }
  }

}
