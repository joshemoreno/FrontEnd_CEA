import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-card',
  templateUrl: './support-card.component.html',
  styleUrls: ['./support-card.component.css']
})
export class SupportCardComponent implements OnInit {

  @Input() card: any;


  constructor() { }

  ngOnInit(): void {
    // this.chart = new Chart('myChart',{})
  }

}
