import { HttpErrorResponse } from "@angular/common/http"
import {  Injectable } from "@angular/core"
import { throwError } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ErrorHandle{

    errHandler(error:HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.log("Error !  : ", error.error)
        }else{
            switch(error.status){
                case 404:
                    console.log("Bulunamadı")
                    break
                case 403:
                    console.log("Engellendi")
                    break
                case 400:
                    console.log("Geçersiz İstek")
                    break
                default:
                    console.log("Hata !")
            }
        }
        return throwError("Bir Hata Oluştu")
    }
}