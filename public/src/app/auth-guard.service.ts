import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuardService implements CanActivate {
  
  
  constructor(private _auth:AuthService , private router:Router) {

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this._auth.user$.map(user=>{
          if(user) return true;
          this.router.navigate(['/login'] ,{queryParams:{returnUrl:state.url}});
          return false;
      })
  }
}
