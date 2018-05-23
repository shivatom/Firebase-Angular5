import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private _auth:AuthService ,private router:Router ,private _user:UserService) { }
  canActivate(): Observable<boolean>{
    
    return this._auth.user$
        .switchMap(user=>this._user.get(user.uid))
        .map(x=>x.isAdmin);
  }
}
