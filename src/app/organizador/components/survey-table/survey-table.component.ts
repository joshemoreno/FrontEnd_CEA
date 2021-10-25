import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements OnInit {

  @Input() surveyTable:any;

  public surveys = [  
    {cod: 1 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 2 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 3 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 4 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 10, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 10, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 5 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 6 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 7 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 8 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 9 , user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 10, user:' Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 11, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 12, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 13, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 14, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 15, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 16, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 17, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 18, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 19, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
    {cod: 20, user: 'Pedro Perez', date: '2021-08-30T08:00:00',desc:'Me gustria un poco más información sobre las monitorias'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  acceptRequest(cod:number,user:string){

  }

  cancelRequest(cod:number,user:string){

  }

}
