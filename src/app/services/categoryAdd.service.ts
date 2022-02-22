import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { Category } from "../models/categoryModel";

@Injectable()
export class CategoryAddService{
    url="http://localhost:3000/movies";
    firebaseUrl = "put your firebase url here"
    private http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    addCategory(category:Category):Observable<Category>{
       return this.http.post<Category>(this.firebaseUrl+"categories.json",category)
    }
}
