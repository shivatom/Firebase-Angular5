import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth , private db:AngularFireDatabase) { 
    this.user$ = afAuth.authState;
  }
  
  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }

}
