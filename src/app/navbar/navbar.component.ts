import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  isAuth:boolean=false;
  authService:AuthService;
  constructor(authService:AuthService) {
    this.authService=authService
    
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      this.isAuth = !!user;
    })
  }
  onLogout(){
    this.authService.logout();
  }

}
