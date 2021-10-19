import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-card',
  templateUrl: './support-card.component.html',
  styleUrls: ['./support-card.component.css']
})
export class SupportCardComponent implements OnInit {

  @Input() card: any;

  single = [
    {
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
    },
    {
      "name": "1",
      "value": 8940000
    },
    {
      "name": "2",
      "value": 5000000
    },
    {
      "name": "3",
      "value": 7200000
    },
    {
      "name": "Germany1",
      "value": 8940000
    },
    {
      "name": "USA1",
      "value": 5000000
    },
    {
      "name": "France1",
      "value": 7200000
    },
    {
      "name": "11",
      "value": 8940000
    },
    {
      "name": "21",
      "value": 5000000
    },
    {
      "name": "31",
      "value": 7200000
    }
  ];

  view: [number,number] = [520, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    // Object.assign(this, { single })
  }

  ngOnInit(){

  }

}
