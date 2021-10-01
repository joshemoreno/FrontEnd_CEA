import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tutor-organizer',
  templateUrl: './tutor-organizer.component.html',
  styleUrls: ['./tutor-organizer.component.css']
})
export class TutorOrganizerComponent implements OnInit {

  owner = {
    id: 1, 
    name: 'Pedro perez', 
    email: 'jose_antonio.moreno @uao.edu.co',
    tel: '3162604006', 
    about: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus diam eget massa condimentum', 
    uriProfile: 'https://lh3.googleusercontent.com/a-/AOh14GhxQ5NxgAIzWf_bSZe6HlqnlOl-IF9asUkASeO4lw=s96-c'
  }

  public materias: Array<any> =[
    {cod: 1, desc:"Fisica 1"},
    {cod: 2, desc:"Fisica 2"},
    {cod: 3, desc:"Fisica 3"},
    {cod: 4, desc:"Matematicas Fundamentales"},
  ];

  public HourCountDis = 120;
  public HourCountReservation = 20;

  public typeUser:{};
  public editMyData = false;
  constructor() {
    this.dataForm = this.createFormGroup();
   }

  createFormGroup(){
    return new FormGroup({
      phone:new FormControl(),
      skills: new FormControl()
    });
  }

  dataForm: FormGroup;

  ngOnInit(): void {
    this.typeUser={
      student: false,
      monitor:false,
      tutor:true,
      asesor: false
    };
  }

  editData(){
    this.editMyData=true;
    console.log('edit')
  }

  saveData(){
    let request = this.dataForm.value;
    this.owner.about = request.skills;
    this.owner.tel = request.phone;
    console.log(request);
    this.editMyData=false;
  }

}
