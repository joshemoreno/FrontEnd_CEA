import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {

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
    this._router.queryParams.subscribe(()=>{
      console.log( Number(this._router.snapshot.queryParams.cod));
    })
  }


}
