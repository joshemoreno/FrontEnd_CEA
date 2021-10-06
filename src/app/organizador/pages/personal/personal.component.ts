import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public cards=[
    {
      title:"Monitores",
      count:10,
      person: [
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        }
      ]
    },
    {
      title:"Tutores",
      count:10,
      person: [
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        }
      ]
    },
    {
      title:"Estudiantes",
      count:10,
      person: [
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        }
      ]
    },
    {
      title:"Asesores",
      count:10,
      person: [
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        }
      ]
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
