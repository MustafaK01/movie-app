import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { AuthService } from "../services/AuthService";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    authService:AuthService;
    router:Router;
    constructor(authService:AuthService,router:Router){
        this.authService=authService;
        this.router=router;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            map(user=>{
                return !!user;
            }),
            tap(isAuth=>{
                if(!isAuth){
                    this.router.navigate(["/auth"]);
                }
            })
        )
    }

}
