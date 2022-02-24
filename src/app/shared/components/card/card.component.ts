import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person: any;

  constructor(private router: Router) { }

  public userName:string;

  ngOnInit(): void {
    this.userName = `${this.person.name} ${this.person.last_name}`;
  }

  goToCalendar(id: number){
    localStorage.setItem('owner',id.toString());
    this.router.navigateByUrl(`home/estudiante/horario`);
  }

}
