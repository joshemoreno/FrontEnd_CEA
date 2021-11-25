import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  descSubject!: string;
  codeSubject!: string;

  constructor(private _router: ActivatedRoute) { }

  public personas: Array<any>=[
    {id: 1, name: 'Pedro perez', email: 'jose_antonio.moreno@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {id: 2, name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {id: 3, name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {id: 4, name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {id: 5, name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {id: 6, name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'}
  ]


  ngOnInit(): void {
    let subject = localStorage.getItem('subject');
    let subjectJson = JSON.parse(subject);
    this.descSubject=subjectJson.des;
    this.codeSubject=subjectJson.cod;
  }
  
}
