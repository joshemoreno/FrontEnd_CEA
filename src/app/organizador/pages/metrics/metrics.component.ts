import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor() { }

  single = [{
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];
  view: [number,number] = [530, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

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
    title: 'Asignaturas'
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

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
