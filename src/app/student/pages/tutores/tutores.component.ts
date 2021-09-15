import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(()=>{
      console.log( Number(this._router.snapshot.queryParams.cod));
    })
  }


}
