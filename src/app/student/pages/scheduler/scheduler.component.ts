import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general/general.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  public ownerShow={
    id: '', 
    userName: '', 
    email: '',
    phone: '', 
    about: '', 
    imageURI: ''
  };
  public typeUser={
    student: true,
    monitor:false,
    tutor:false,
    asesor: false,
    arrayMeets:{
      support:null,
      subject:null,
      owner:null
    }
  };

  constructor(private generalService: GeneralService) { 
    this.typeUser={
      student: true,
      monitor:false,
      tutor:false,
      asesor: false,
      arrayMeets:{
        support:null,
        subject:null,
        owner:null
      }
    };

  }

  ngOnInit(): void {
    this.getDetailOwner();
    this.getMeetingsByOwner();
  }

  getMeetingsByOwner(){
    let subject = localStorage.getItem('subject');
    let owner = localStorage.getItem('owner');
    let storage = JSON.parse(subject);
    this.typeUser.arrayMeets.support=storage.sup;
    this.typeUser.arrayMeets.subject=storage.cod;
    this.typeUser.arrayMeets.owner=owner;
  }
  
  getDetailOwner(){
    let owner = localStorage.getItem('owner');
    this.generalService.getDetailUser(owner)
      .subscribe((res:any)=>{
        this.ownerShow.id=res.data.id;
        this.ownerShow.userName=`${res.data.name} ${res.data.last_name}`;
        this.ownerShow.imageURI=res.data.imageURI;
        this.ownerShow.email=res.data.email;
        this.ownerShow.phone=res.data.phone;
        this.ownerShow.about=res.data.about;
      })
  }


}
