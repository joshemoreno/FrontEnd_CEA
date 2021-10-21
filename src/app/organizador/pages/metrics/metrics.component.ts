import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor() { }

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
      {

      },
      {
        
      }
    ]
  }

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
  }



}
