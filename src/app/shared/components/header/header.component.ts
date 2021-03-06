import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { HeaderService } from '../../services/header/header.service';
import { SessionService } from '../../services/session/session.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  option: any;

  constructor(
    private _alertService: AlertsService,
    private _sessionService : SessionService, 
    private _authService: AuthService,
    private _headerService: HeaderService
  ) { }


  public monitorias: Array<any> =[];
  public tutorias: Array<any> =[];
  public asesorias: Array<any> =[];

  public opciones: Array<any> = []

  ngOnInit(): void {
    this.filterOptions();
    this.getCurrentUser();
    this.getCurrentUserRole();
    const checkSession = interval(10000);
    checkSession.subscribe(()=>{
      this._sessionService.checkSession() ? null : this.openAlert();
    });
    this.getSubjects(1);
    this.getSubjects(2);
    this.getSubjects(3);
  }

  goHome(){
    window.location.replace('/home');
  }

  logOut(){
    this._authService.logOutUser();
  }

  getSubjects(id:number){
    this._headerService.getAllSubjects(id)
    .subscribe((res:any)=>{
      res.data.map((index:any)=>{
        switch (id) {
          case 1:
            this.monitorias.push(index.subjectId);
            break;
          case 2:
            this.tutorias.push(index.subjectId);
            break;
          case 3:
            this.asesorias.push(index.subjectId);
            break;
          default:
            break;
        }
      })
    })
  }

  prepareData(data:string):string{
    let res = data.replace(' ','_');
    return res;
  }

  getCurrentUser(){
    let user = this._sessionService.onSession();
    return user.userName;
  }

  getCurrentUserRole(){
    let user = this._sessionService.onSession();
    return user.role;
  }

  filterOptions(){
    let role = this.getCurrentUserRole();
    if(role == 1){
      this.opciones.push({opt:"Mis reservas",uri:"/home/estudiante/reservas"});
    }
    if(role == 2){
      this.opciones.push({opt:"Gesti??n monitorias",uri:"/home/monitor/monitorias"});
    }
    if(role == 3){
      this.opciones.push({opt:"Gesti??n tutorias",uri:"/home/tutor/tutorias"});
    }
    if(role == 6){
      this.opciones.push({opt:"Gesti??n asesorias",uri:"/home/asesor/asesorias"});
    }
    if(role == 4){
      this.opciones.push({opt:"Admin. personal",uri:"/home/organizador/personas"});
      this.opciones.push({opt:"Otros servicios",uri:"/home/organizador/metricas"});
    }
  }

  goMonitory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse, sup:1}));
    window.location.replace('home/estudiante/monitores');
  }

  goTutory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse, sup:2}));
    window.location.replace('home/estudiante/tutores');
  }

  goAdvisory(codCourse:number, descCourse: string){
    localStorage.setItem('subject', JSON.stringify({cod: codCourse, des: descCourse, sup:3}));
    window.location.replace('home/estudiante/profesionales');
  }

  openAlert(){
    this._alertService.confirmAlert(`${this.getCurrentUser().toLowerCase()} su sesi??n a terminado si desea volver a ingresar presione "Volver a cargar"`,null,'Volver a cargar', 'Salir')
    .then((res:any)=>{
      if(res.isConfirmed){
        localStorage.clear();
        this._authService.logInUser();
      }else{
        this._authService.logOutUser();
      }
    });
  }

}
