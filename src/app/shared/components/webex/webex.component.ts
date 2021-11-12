import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Access_token } from '../../models/webex/getAccessTokenDto.class';
import { WebexService } from '../../services/webex/webex.service';

@Component({
  selector: 'app-webex',
  templateUrl: './webex.component.html',
  styleUrls: ['./webex.component.css']
})
export class WebexComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _webexService: WebexService
  ) { }

  ngOnInit(): void {
    this.logInWebEx();
  }

  logInWebEx(){
    let body = new Access_token;
    let codeParam = this.getCode();
    body.code=codeParam;
    this._webexService.logIn(body)
    .subscribe((res:any)=>{
      if(res.status=200){
        let accessToken:string = res.body.access_token;
        let bodyJson = JSON.parse(localStorage.getItem('newMeet')); 
        this._webexService.createAmeeting(accessToken,bodyJson)
        .subscribe((res:any)=>{
          localStorage.removeItem('newMeet');
          console.log(res);
        })
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
