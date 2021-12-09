import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/student/services/general/general.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  descSubject!: string;
  codeSubject!: string;
  codeSupport!: string;

  constructor(private generalService: GeneralService) { }

  public personas: Array<any>=[];

  ngOnInit(): void {
    let subject = localStorage.getItem('subject');
    let subjectJson = JSON.parse(subject);
    this.descSubject=subjectJson.des;
    this.codeSubject=subjectJson.cod;
    this.codeSupport=subjectJson.sup;
    this.getMonitorBySubject();    
  }

  getMonitorBySubject(){
    this.generalService.getPersonsBySupport(Number(this.codeSupport),Number(this.codeSubject))
      .subscribe((res:any)=>{
        res.data.map((index:any)=>{
          this.personas.push(index.user);
        })
      })
  }
  
}
