import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetsService } from 'src/app/monitor/services/meets/meets.service';
import { currentUser } from '../../models/token.class';
import { Access_token } from '../../models/webex/getAccessTokenDto.class';
import { AlertsService } from '../../services/alerts/alerts.service';
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
    private _AlertsService: AlertsService,
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
    let typeWeBex = Number(localStorage.getItem('typeWebEx'));
    this._webexService.logIn(body)
      .subscribe((res: any) => {
        if (res.status == 200 && typeWeBex == 1) {
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
                        this._AlertsService.infoAlert('Se edito una nueva reunión, por favor revise su correo institucional')
                          .then((res: any) => {
                            if (res.isConfirmed) {
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
                                  window.location.replace('/home');
                                  break;
                              }
                            }
                          })
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
                        this._AlertsService.infoAlert('Se creo una nueva reunión, por favor revise su correo institucional')
                          .then((res: any) => {
                            if (res.isConfirmed) {
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
                                  window.location.replace('/home');
                                  break;
                              }
                            }
                          })
                      }
                    });
                }
                localStorage.removeItem('newMeet');
              })
          }
        }
        if (res.status == 200 && typeWeBex == 2) {
          let accessToken: string = res.body.access_token;
          let dtoJson = JSON.parse(localStorage.getItem('intationJson'));
          this._webexService.createAInvitantion(dtoJson, accessToken)
            .subscribe((res: any) => {
              console.log(res);
              if (res.status == 200) {
                let reservationDetail = JSON.parse(localStorage.getItem('reservationDetail'));
                this._MeetsService.createReservetion(reservationDetail)
                .subscribe((res: any) => {
                      console.log(res);
                      if (res.status == 200) {
                          this._AlertsService.infoAlert('Usted fue invitado a la reunión, por favor revise su correo institucional')
                            .then((res: any) => {
                              if (res.isConfirmed) {
                                localStorage.removeItem('intationJson');
                                window.location.replace('/home');
                              }
                            })
                        }
                  })
              }
            }, err => {
              if (err.status == 409) {
                this._AlertsService.infoAlert('Usted ya se encuentra invitado a esta sesión')
                  .then((res: any) => {
                    if (res.isConfirmed) {
                      localStorage.removeItem('intationJson');
                      window.location.replace('/home');
                    }
                  })
              }
            })
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
