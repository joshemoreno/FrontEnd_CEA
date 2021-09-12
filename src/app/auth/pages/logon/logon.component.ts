import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar,  MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { requestLogOn } from '../../models/request.class';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private _authSercive: AuthService, private _router: ActivatedRoute, private _snackBar: MatSnackBar) { 
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
      this._authSercive.logOnUser(body);
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