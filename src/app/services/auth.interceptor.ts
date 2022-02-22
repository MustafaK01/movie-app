import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./AuthService";


@Injectable()
export class  AuthInterceptor implements HttpInterceptor{
    authService:AuthService;
    constructor(authService:AuthService){
        this.authService=authService;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user=>{
                if(!user){
                    return next.handle(req)
                }
                const updatedRequest = req.clone({
                    params:new HttpParams().set('auth',user.token)
                })
                return next.handle(updatedRequest);
            })
            
        )        
    }
}
