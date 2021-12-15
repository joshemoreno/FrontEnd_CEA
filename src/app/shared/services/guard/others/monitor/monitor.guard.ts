import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class MonitorGuard implements CanActivate, CanActivateChild {

  constructor(private _sessionService: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this._sessionService.checkSession()){
        window.location.replace('/auth/login');
        return false;
      }
      
      let user = this._sessionService.onSession();
      if(user.role != 2){
        return false;
      }

      return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
