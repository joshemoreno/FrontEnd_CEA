import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  cod: number;
  subject: string;
  owner: string;
  date: string;
  detail: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cod: 1 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 2 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 3 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 4 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 5 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 6 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 7 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 8 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 9 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibre', link:'http://localhost:4200'},
  {cod: 10 ,subject: 'Fisica 1', owner: 'Pedro Perez', date: '2021-08-30T08:00:00',detail: 'Duda sobre el tema de caidalibreDuda sobre el tema de caidalibreDuda sobre el tema de caidalibreDuda sobre el tema de caidalibreDuda sobre el tema de caidalibreDuda sobre el tema de caidalibre', link:'http://localhost:4200'},
];

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{

  displayedColumns: string[] = ['subject', 'owner', 'date', 'detail','Accions'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    
  }

  getLink(cod:number){
    console.log(cod);
  }

  cancelReservation(cod:number){
    console.log(cod);
  }

}