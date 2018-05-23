import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor( private authService:AuthService) {
   
  }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
}
