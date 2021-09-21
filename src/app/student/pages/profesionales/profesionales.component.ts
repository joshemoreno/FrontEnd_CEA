import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../../services/data-transfer.service';

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
    {name: 'Pedro perez', email: 'jose_antonio.moreno@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'},
    {name: 'Pedro perez', email: 'pedro_perez@uao.edu.co', tel: '3162604006', about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum' , uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'}
  ]


  ngOnInit(): void {
    this._router.queryParams.subscribe((params)=>{
      this.descSubject=this.goBackData(params.desc);
      this.codeSubject=params.cod;
    })
  }

  goBackData(data:string):string{
    let res = data.replace('_',' ');
    return res;
  }
  
}
