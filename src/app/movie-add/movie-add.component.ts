import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/categoryModel';
import { Movie } from '../models/movieModel';
import { AlterifyService } from '../services/aleterify.service';
import { CategoryService } from '../services/category.service';
import { MovieAddService } from '../services/movieAdd.service';
import { MovieFormDataChecker } from '../utils/MovieFormDataChecker';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  providers:[CategoryService,MovieAddService,AlterifyService,MovieFormDataChecker]
})
export class MovieAddComponent implements OnInit {

  movieModel:any={};
  categoryNames:Category[];
  categoryService:CategoryService;
  movieAddService:MovieAddService;
  alertifyService:AlterifyService;
  movieFormDataChecker:MovieFormDataChecker;
  router:Router;
  constructor(categoryService:CategoryService,movieAddService:MovieAddService,
    alertifyService:AlterifyService,movieFormDataChecker:MovieFormDataChecker,
    router:Router) { 
    this.categoryService = categoryService;
    this.movieAddService = movieAddService;
    this.alertifyService=alertifyService;
    this.movieFormDataChecker=movieFormDataChecker;
    this.router=router;
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories=>{
      this.categoryNames = categories;
    });
  }
  cleanForm(){
    this.movieModel = {}
  }
  addMovie(title:any,categoryId:any,imdbPoint:any,imageUrl:any,description:any,screenWriters:any,filmDirectors:any,publishedDate:any){
        if(this.movieFormDataChecker.checkIfAllTrue(title,categoryId,imdbPoint,imageUrl,description,screenWriters,filmDirectors,publishedDate)){
            const movie:Movie={
              id:0,
              title:this.movieModel.title,
              description:this.movieModel.description,
              imageUrl:this.movieModel.imageUrl,
              isPopular:imdbPoint>7? true:false,
              publishedDate:this.movieModel.publishedDate,
              screenWriters:this.movieModel.screenWriters,
              filmDirectors:this.movieModel.filmDirectors,
              categoryId:this.movieModel.categoryId,
              imdbPoint:this.movieModel.imdbPoint,
              uploadDate:new Date().getTime()
            }
            this.movieAddService.addMovie(movie).subscribe(movie=>{
              this.router.navigate(['/movies'])
              this.alertifyService.success("Eklendi")
            });
        }else{
            this.movieFormDataChecker.notification(title,imageUrl,description);
            this.alertifyService.error("Bilgileri Tam Girin")
            }
        }

  }
