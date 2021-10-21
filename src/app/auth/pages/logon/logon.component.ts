import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { requestLogOn } from '../../models/request.class';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(
    private _authSercive: AuthService, 
    private _router: ActivatedRoute, 
    private router: Router, 
    private spinner: NgxSpinnerService
    ) 
    {}

  ngOnInit(): void {
    this.spinner.show();
    this.logOn();
  }

  logOn(){
    let body = new requestLogOn;
    let codeParam = this.getCode();
    body.code=codeParam;
    this._authSercive.logOnUser(body)
    .subscribe((res:any)=>{
      if(res.code=200){
        localStorage.setItem('Token',res.token);
        this.router.navigateByUrl('home');
      }
    })
  }

  getCode():string{
    let code:string = '';
    this._router.queryParams.subscribe((params:any) =>{
      code = params.code;
    });
    return code;
  }

}