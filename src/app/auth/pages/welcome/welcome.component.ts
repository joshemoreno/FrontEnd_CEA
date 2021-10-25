import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public roles: Array<any> = [
    {opt:"Estudiante",role:1},
    {opt:"Monitor",role:2},
    {opt:"Tutor",role:3},
    {opt:"Organizador",role:4}
  ];

  constructor( private _snackBar: MatSnackBar, private router: Router) {
    this.roleForm = this.createFormGroup();
   }

   createFormGroup(){
    return new FormGroup({
      role:new FormControl()
    });
  }

  roleForm: FormGroup;

  ngOnInit(): void {

  }

  getRole(){
    let role = this.roleForm.value.role;
    if (role!=null){
      localStorage.removeItem('Welcome');
      window.location.replace('/home');
      // this.router.navigateByUrl('home');

    }else{
      this._snackBar.open('Por favor selecciona un perfil', 'ok', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['error-scanck-bar'],
      });
    }
  }
}
