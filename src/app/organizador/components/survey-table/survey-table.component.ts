import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements OnInit {

  @Input() surveyTable:any;

  public surveys = []

  constructor() { }

  ngOnInit(): void {
  }

  acceptRequest(cod:number,user:string){

  }

  cancelRequest(cod:number,user:string){

  }

}
