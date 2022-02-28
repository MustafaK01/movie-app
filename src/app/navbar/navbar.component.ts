import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  userName:string;
  isAuth:boolean=false;
  authService:AuthService;
  constructor(authService:AuthService) {
    this.authService=authService    
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      this.isAuth = !!user;
      this.authService.user.subscribe(userData=>{
        if(userData){
          this.userName=(userData.email.substring(0,userData.email.indexOf("@")));
        }
      })
  
    })
  }
  onLogout(){
    this.authService.logout();
  }

  
  

}
