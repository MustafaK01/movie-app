import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../category/categoryModel";
import { map, Observable } from "rxjs";

@Injectable()
export class CategoryService{
    url="http://localhost:3000/categories"
    firebaseUrl="put your firebase url here"
    private http:HttpClient;
    constructor(http:HttpClient){
        this.http=http;
    }
    getCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.firebaseUrl+"categories.json").pipe(
            map(response=>{
                const categories:Category[]=[];
                for(const k in response){
                    categories.push({...response[k],categoryId:k})
                }
                return categories;
            })
        )
    }
}
