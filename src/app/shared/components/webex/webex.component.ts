import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetsService } from 'src/app/monitor/services/meets/meets.service';
import { currentUser } from '../../models/token.class';
import { Access_token } from '../../models/webex/getAccessTokenDto.class';
import { SessionService } from '../../services/session/session.service';
import { WebexService } from '../../services/webex/webex.service';

@Component({
  selector: 'app-webex',
  templateUrl: './webex.component.html',
  styleUrls: ['./webex.component.css']
})
export class WebexComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _webexService: WebexService,
    private _MeetsService: MeetsService,
    private _onSession: SessionService,
  ) { }

  private user: currentUser;

  ngOnInit(): void {
    this.logInWebEx();
    this.user = this._onSession.onSession();
  }

  logInWebEx() {
    let body = new Access_token;
    let codeParam = this.getCode();
    body.code = codeParam;
    this._webexService.logIn(body)
      .subscribe((res: any) => {
        if (res.status = 200) {
          let accessToken: string = res.body.access_token;
          let bodyJson = JSON.parse(localStorage.getItem('newMeet'));
          if (bodyJson.id) {
            this._webexService.createAmeeting(accessToken, bodyJson)
              .subscribe((res: any) => {
                if (res.status == 200) {
                  let meetId: string = res.body.id;
                  let webLink: string = res.body.webLink;
                  bodyJson.idWebEx = meetId;
                  bodyJson.classRoom = webLink;
                  localStorage.setItem('newMeet', JSON.stringify(bodyJson));
                  this._MeetsService.editAmeet()
                    .subscribe((res: any) => {
                      if (res.status == 200) {
                        switch (this.user.role) {
                          case 1:
                            window.location.replace('/home');
                            break;
                          case 2:
                            window.location.replace('/home/monitor/monitorias');
                            break;
                          case 3:
                            window.location.replace('/home/tutor/tutorias');
                            break;
                          case 6:
                            window.location.replace('/home/asesor/asesorias');
                            break;
                          default:
                            break;
                        }
                      }
                    });
                }
                localStorage.removeItem('newMeet');
              })
          } else {
            this._webexService.createAmeeting(accessToken, bodyJson)
              .subscribe((res: any) => {
                if (res.status == 200) {
                  let meetId: string = res.body.id;
                  let webLink: string = res.body.webLink;
                  bodyJson.idWebEx = meetId;
                  bodyJson.classRoom = webLink;
                  localStorage.setItem('newMeet', JSON.stringify(bodyJson));
                  this._MeetsService.createAnewMeet()
                    .subscribe((res: any) => {
                      if (res.status == 200) {
                        switch (this.user.role) {
                          case 1:
                            window.location.replace('/home');
                            break;
                          case 2:
                            window.location.replace('/home/monitor/monitorias');
                            break;
                          case 3:
                            window.location.replace('/home/tutor/tutorias');
                            break;
                          case 6:
                            window.location.replace('/home/asesor/asesorias');
                            break;
                          default:
                            break;
                        }
                      }
                    });
                }
                localStorage.removeItem('newMeet');
              })
          }
        }
      })
  }

  getCode(): string {
    let code: string = '';
    this._router.queryParams.subscribe((params: any) => {
      code = params.code;
    });
    return code;
  }

}
