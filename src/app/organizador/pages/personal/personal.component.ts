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
      person: [
        {
          id: "1",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "2",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 2"
        },
        {
          id: "3",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 3"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        }
      ]
    },
    {
      title:"Tutores",
      person: [
        {
          id: "1",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "2",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "3",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        }
      ]
    },
    {
      title:"Estudiantes",
      person: [
        {
          id: "1",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          id: "2",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          id: "3",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 2,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c"
        }
      ]
    },
    {
      title:"Asesores",
      // count:10,
      person: [
        {
          id: "1",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "2",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "3",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        },
        {
          id: "4",
          name: "Pedro Perez",
          state: 1,
          url: "https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c",
          subject: "Fisica 1"
        }
      ]
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
