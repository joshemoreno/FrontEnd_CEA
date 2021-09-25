import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-organizer',
  templateUrl: './monitor-organizer.component.html',
  styleUrls: ['./monitor-organizer.component.css']
})
export class MonitorOrganizerComponent implements OnInit {

  owner = {
    id: 1, 
    name: 'Pedro perez', 
    email: 'jose_antonio.moreno @uao.edu.co',
    tel: '3162604006', 
    about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum', 
    uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'
  }

  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  public HourCountDis = 120;
  public HourCountReservation = 20;

  public typeUser:{};

  constructor() { }

  ngOnInit(): void {
    this.typeUser={
      student: false,
      monitor:true,
      tutor:false
    };
  }

}
