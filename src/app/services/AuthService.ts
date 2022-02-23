import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { Response } from '../models/Response';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  apiKey="Your api key to here"
  http:HttpClient;
  router:Router;
  constructor(http:HttpClient,router:Router) {
    this.http = http;
    this.router=router
  }
  login(email:string,password:string){
    return this.http.post<Response>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.apiKey,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response => {
        this.handleAuth(response.email,response.localId,response.idToken,+response.expiresIn)
      })
    )
  }
  register(email:string,password:string){
    return this.http.post<Response>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.apiKey,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      tap(response => {
        this.handleAuth(response.email,response.localId,response.idToken,+response.expiresIn)
      })
    )
  }

  logout(){
    this.user.next(null)
    localStorage.removeItem("user")
    this.router.navigate(["/auth"])
  }

  handleAuth(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate = new Date(new Date().getTime()+(expiresIn*1000))
    const user= new User(email,userId,token,expirationDate)
    this.user.next(user);
    localStorage.setItem("user",JSON.stringify(user));
  }


  autoLogin(){
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
      return;
    }
    const tempUser = new User(user.email,user.userId,user._token,new Date(user._tokenExpirationDate));
    if(tempUser.token){
      this.user.next(tempUser);
    }else{
      alert("Lütfen Giriş Yapın")
    }
  }
}
