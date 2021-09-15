import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(()=>{
      console.log( Number(this._router.snapshot.queryParams.cod));
    })
  }
  
}
