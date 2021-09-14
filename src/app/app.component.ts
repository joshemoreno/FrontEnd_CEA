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
    console.log(this._sessionService.checkToken());
  }
  title = 'frontEnd';

  isLogin():boolean{
    return this._sessionService.checkToken();
  }

}
