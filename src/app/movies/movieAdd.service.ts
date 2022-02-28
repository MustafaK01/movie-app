import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Movie } from "../movies/movieModel";

@Injectable()
export class MovieAddService{
    url="http://localhost:3000/movies";
    firebaseUrl = "put your firebase url here"
    private http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    addMovie(movie:Movie):Observable<Movie>{
       return this.http.post<Movie>(this.firebaseUrl+"movies.json",movie)
    }
}