import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, map, Observable, tap, throwError } from "rxjs";
import { Movie } from "../models/movieModel";
import { ErrorHandle } from "../utils/errorHandle";
import { AuthService } from "./AuthService";
@Injectable()
export class MovieService{
    errHandler:ErrorHandle;
    url="http://localhost:3000/movies";
    firebaseUrl = "put your firebase url here"
    private authService:AuthService;
    private http:HttpClient;
    constructor(http:HttpClient,errHandler:ErrorHandle){
        this.http=http;
        this.errHandler=errHandler;

    }   
    getMovies(categoryId:number):Observable<Movie[]>{
        

        return this.http.get<Movie[]>(this.firebaseUrl+"movies.json").pipe(
    
            map(response=>{
                const movies:Movie[]=[];
        
                for(const k in response){
                    if(categoryId){
                        if(categoryId==response[k].categoryId){
                            movies.push({...response[k],id: k});
                        }
                    }
                    else{
                        movies.push({...response[k],id: k});
                    }

                    
                }
                return movies;
            }),
            tap(movie =>console.log(movie)),
            delay(400));
    }
}
