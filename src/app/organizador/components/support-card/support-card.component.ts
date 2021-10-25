import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-card',
  templateUrl: './support-card.component.html',
  styleUrls: ['./support-card.component.css']
})
export class SupportCardComponent implements OnInit {

  private width: number = 520;
  private heigth: number = 300;

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
    },
    {
      "name": "Germany2",
      "value": 8940000
    },
    {
      "name": "USA2",
      "value": 5000000
    },
    {
      "name": "France2",
      "value": 7200000
    },
    {
      "name": "12",
      "value": 8940000
    },
    {
      "name": "22",
      "value": 5000000
    },
    {
      "name": "32",
      "value": 7200000
    },
    {
      "name": "Germany12",
      "value": 8940000
    },
    {
      "name": "USA12",
      "value": 5000000
    },
    {
      "name": "France12",
      "value": 7200000
    },
    {
      "name": "112",
      "value": 8940000
    },
    {
      "name": "212",
      "value": 5000000
    },
    {
      "name": "312",
      "value": 7200000
    }
  ];

  view: [number,number] = [this.width, this.heigth];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;

  constructor() {
  }

  ngOnInit(){
  }

}
