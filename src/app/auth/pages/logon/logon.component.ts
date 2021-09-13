import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { requestLogOn } from '../../models/request.class';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private _authSercive: AuthService, private _router: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) { 
    this.roleForm = this.createFormGroup();
  }

  public roles: Array<any> = [
    {opt:"Estudiante",role:1},
    {opt:"Monitor",role:2},
    {opt:"Tutor",role:3},
    {opt:"Organizador",role:4}
  ];

  createFormGroup(){
    return new FormGroup({
      role:new FormControl()
    });
  }

  roleForm: FormGroup;

  ngOnInit(): void {
    
  }

  getRole(){
    let body = new requestLogOn;
    let role = this.roleForm.value.role;
    if (role!=null){
      let code = this.getCode();
      body.code=code;
      body.role=role;
      this._authSercive.logOnUser(body)
      .subscribe((res:any)=>{
        if(res.code=200){
          localStorage.setItem('Token','asfkjahf');
          this.router.navigateByUrl('home');
        }
      })
    }else{
      this._snackBar.open('Por favor selecciona un perfil', 'ok', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 2000
      });
    }
  }

  getCode():string{
    let code:string = '';
    this._router.queryParams.subscribe((params:any) =>{
      code = params.code;
    });
    return code;
  }

}