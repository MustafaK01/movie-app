import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="movieApp"
  authService:AuthService
  constructor(authService:AuthService){
    this.authService=authService;
  }
  ngOnInit(): void {
    this.authService.autoLogin()
  }
}
