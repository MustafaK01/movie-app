import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Movie } from "../models/movieModel";

@Injectable()
export class MovieDetailsService{
    url = "http://localhost:3000/movies";
    http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    getMovieDetail(movieId:number):Observable<Movie>{
        let tempUrl = this.url;
        if(tempUrl){
            tempUrl+="/"+movieId;
        }
       return this.http.get<Movie>(tempUrl).pipe(
           catchError(this.errHandler)
       );
    }
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
                default:
                    console.log("Hata !")
            }
        }
            return throwError("Bir Hata Oluştu")
    }
}