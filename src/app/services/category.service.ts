import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/categoryModel";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService{
    url="http://localhost:3000/categories"
    private http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    getCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.url);
    }
}

