import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError } from "rxjs";
import { Movie } from "../models/movieModel";
import { ErrorHandle } from "../utils/errorHandle";

@Injectable()
export class MovieDetailsService{
    errHandler:ErrorHandle;
    url = "http://localhost:3000/movies";
    firebaseUrl = "put your firebase url here"
    http:HttpClient;
    constructor(http:HttpClient,errHandler:ErrorHandle){
        this.http=http;
        this.errHandler=errHandler;
    }
    getMovieDetail(movieId:string):Observable<Movie>{
        let tempUrl = this.firebaseUrl;
        if(tempUrl){
            tempUrl+="/"+movieId+".json";
        }
       return this.http.get<Movie>(tempUrl).pipe(
           catchError(this.errHandler.errHandler),
           delay(400)
       );
    }

}
