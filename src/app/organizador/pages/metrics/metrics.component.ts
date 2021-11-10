import { Component, OnInit } from '@angular/core';
import { subjectDto } from '../../models/subject.class';
import { SubjectService } from '../../services/subject/subject.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor(private _subjectService: SubjectService) { 
    this.subjectForm = this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({
      description:new FormControl()
    });
  }

  subjectForm: FormGroup;

  public createBtn = false;
  public textShow = '';

  public cards = [
    {
      title: 'Demanda de tutorias'
    },
    {
      title: 'Demanda de monitorias'
    },
    {
      title: 'Demanda de asesorias'
    },
  ]

  public subjectCard = {
    title: 'Asignaturas',
    subject: [

    ]
  }

  responseSubject:Array<subjectDto>

  public commentTable = {
    title: 'Comentarios y sugerencias',
    firstColum: 'Fecha',
    secondColum: 'Usuario',
    thirdColum: 'Comentario',
    fourColum: 'Acciones',
    firstBottom: 'Aceptar',
    secondBottom: 'Cancelar'
  }

  public surveyTable = {
    title: 'Encuesta de satisfacción',
    firstColum: 'Fecha',
    secondColum: 'Usuario',
    thirdColum: 'Comentario',
    fourColum: 'Acciones',
    firstBottom: 'Aceptar',
    secondBottom: 'Cancelar'
  }

  ngOnInit(): void {
    this.getAllSubjects();
  }
  
  getAllSubjects(){
    this._subjectService.getAllSubjects()
    .subscribe((res:any)=>{
        this.responseSubject = res.data;
        this.subjectCard.subject = this.responseSubject;
      });
  }

  createSubject(){
    let subject:subjectDto = new subjectDto();
    subject.description = this.subjectForm.value.description; 
    this._subjectService.createNewSubject(subject)
    .subscribe((res:any)=>{
      if(res.status==201){
        this.getAllSubjects();
        this.subjectForm.reset();
        this.createBtn = false;
      }
    })    
  }

  search(event:any){
    let inputText:string;
    if((event.target.value).length === 0){
      this.subjectCard.subject = this.responseSubject;
    }else{
      inputText = event.target.value;
      let expresion = new RegExp(`${inputText}.*`, "i");
      let filterSubject = this.responseSubject.filter(subject => expresion.test(subject.description)); 
      this.subjectCard.subject = filterSubject;
    }
    if ((this.subjectCard.subject).length === 0){
      this.createBtn = true;
      this.textShow = inputText;
    }else{
      this.createBtn = false;
    }
  }

}
