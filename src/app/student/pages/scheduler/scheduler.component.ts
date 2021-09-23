import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  owner = {
    id: 1, 
    name: 'Pedro perez', 
    email: 'jose_antonio.moreno @uao.edu.co',
    tel: '3162604006', 
    about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum', 
    uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'
  }

  
  ratingDisplay: number;
  
  onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
