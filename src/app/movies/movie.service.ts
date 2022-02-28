import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, map, Observable, tap, throwError } from "rxjs";
import { Movie } from "../movies/movieModel";
import { UsersMovieListings } from "../movies/UsersMovieListings";
import { ErrorHandle } from "../utils/errorHandle";
import { AuthService } from "../auth/AuthService";
import { CommentModel } from "./movie-details/comment.Model";
import { getCommentModel } from "./movie-details/getComment.model";


@Injectable()
export class MovieService{
    errHandler:ErrorHandle;
    movieId:string;
    comments:getCommentModel[]=[]; 
    url="http://localhost:3000/movies";
    firebaseUrl = "put your firebase url here"

    private http:HttpClient;
    constructor(http:HttpClient,errHandler:ErrorHandle){
        this.http=http;
        this.errHandler=errHandler;
    }
    addTList(item:UsersMovieListings):Observable<UsersMovieListings>{
        return this.http.post<UsersMovieListings>(this.firebaseUrl+"/users/"+item.userId+"/list/"+item.movieId+".json",{
            addedDate:new Date().getTime()
        }).pipe(
            tap(data=>console.log(data)),
            catchError(this.errHandler.errHandler)
        )
    }
    removeFromList(item:UsersMovieListings):Observable<UsersMovieListings>{
        return this.http.delete<UsersMovieListings>(this.firebaseUrl+"/users/"+item.userId+"/list/"+item.movieId+".json",{
        }).pipe(
            tap(data=>console.log(data)),
            catchError(this.errHandler.errHandler)
        )
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

    getList(userId:string):Observable<string[]>{
        return this.http.get<string[]>(this.firebaseUrl+"/users/"+userId+"/list.json").pipe(
            map(response=>{
                const movies:string[]=[]
                for(const key in response){
                    movies.push(key);
                }
                return movies;
            }),catchError(this.errHandler.errHandler)
        )
    }
    senddComment(comment:CommentModel){
        return this.http.post<CommentModel>(this.firebaseUrl+"/comments.json",{
            commentOwner:comment.userName,
            comment:comment.comment,
            commentPostedDate:new Date(new Date()).toLocaleDateString(),
            movieName:comment.forWhichMovie
        })
    }
    getComments():Observable<getCommentModel[]>{
        return this.http.get<getCommentModel[]>(this.firebaseUrl+"/comments.json").pipe(
            map(response=>{
                const comments:getCommentModel[]=[];
                for(const k in response){
                    comments.push({...response[k]})
                }
                return comments;
            })
        )
    }
    getMovieDetail(movieId:any):Observable<Movie>{
        let tempUrl = this.firebaseUrl;
        if(tempUrl){
            tempUrl+="/movies/"+movieId+".json";
        }
       return this.http.get<Movie>(tempUrl).pipe(
           catchError(this.errHandler.errHandler),
           delay(400)
       );
    }

}
