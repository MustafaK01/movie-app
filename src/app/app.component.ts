import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authService:AuthService
  title:string="movieApp";
  constructor(authService:AuthService){
    this.authService=authService;
  }
  ngOnInit(): void {
    this.authService.autoLogin()
  }
}
