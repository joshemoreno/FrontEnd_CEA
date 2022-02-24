import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { requestLogOn } from '../../models/request.class';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/shared/services/alerts/alerts.service';

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
    private spinner: NgxSpinnerService,
    private _AlertsService: AlertsService
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
    },(error:any)=>{ 
      if(error.status == 401){
        this._AlertsService
          .errorAlert('Usted no ha sido autorizado para ingresar a la aplicación, por favor espere')
          .then((res:any)=>{
            window.location.replace('/auth/login');
          })
      }
      if(error.status == 500){
        window.location.replace('/auth/login');
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