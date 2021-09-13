import { Component, OnInit } from '@angular/core';
import { SessionService } from './shared/services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _sessionService: SessionService){

  }

  ngOnInit(): void {
    let res = this._sessionService.checkToken();
    console.log(res);
  }
  title = 'frontEnd';
}
