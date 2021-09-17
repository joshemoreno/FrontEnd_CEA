import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { SessionService } from './shared/services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _sessionService: SessionService, private _authService: AuthService){

  }

  ngOnInit(): void {
    if(this._sessionService.getStorege('Token')!=null){
      this.isLogin() ? null : this._authService.logOutUser();
    }
  }

  title = 'frontEnd';

  isLogin():boolean{
    return this._sessionService.checkSession();
  }

}
