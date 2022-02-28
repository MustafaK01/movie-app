import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from './auth.response';
import { AlterifyService } from '../shared/alert/aleterify.service';
import { AuthService } from './AuthService';
import { RegisterAndLoginFormDataChecker } from '../utils/RegisterAndLoginFormDataChecker';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[RegisterAndLoginFormDataChecker,AlterifyService]
  
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = false;
  loading: boolean = false;
  error: string;
  alertify:AlterifyService;
  private authService: AuthService
  private router: Router;
  check:RegisterAndLoginFormDataChecker
  constructor(authService: AuthService,  router: Router,
    alertify:AlterifyService,check:RegisterAndLoginFormDataChecker) {
    this.authService=authService;
    this.router=router;
    this.alertify=alertify;
    this.check = check;
   }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  closeDialog(){
    this.error=null
  }
  onSubmit(form: NgForm) {
    if(form.invalid) 
      return;

    const email = form.value.email;
    const password = form.value.password;

    if(!this.check.checkIfTheEmailIsEntered(email)){
      this.alertify.error("Geçerli Bir Email Adresi Girin")
      this.router.navigate(['/movies']);
      return;
    }
    this.loading = true;

    let authResponse: Observable<Response>;
    
    if(this.isLoginMode) {
      authResponse = this.authService.login(email, password)
    } else {
      if(password!=form.value.password2){
        this.alertify.error("Şifreleriniz Aynı Değil")
        this.router.navigate(['/movies']);
        return;
      }else{
        authResponse = this.authService.register(email, password)
      }
    }

    authResponse.subscribe(response => {
      this.loading = false;
      this.router.navigate(['/movies']);
    }, err => {
      this.error = err;     
      this.loading = false;
    })

    form.reset();
  }
}
