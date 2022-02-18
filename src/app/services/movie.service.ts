import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Movie } from "../models/movieModel";


@Injectable()
export class MovieService{
    url="http://localhost:3000/movies";
    private http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    getMovies(categoryId:number):Observable<Movie[]>{
        
        let tempUrl = this.url

        if(categoryId){
            tempUrl+='?categoryId='+categoryId;
        }
        return this.http.get<Movie[]>(tempUrl).pipe(
            catchError(this.errHandl));
    }
    errHandl(error:HttpErrorResponse){
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

