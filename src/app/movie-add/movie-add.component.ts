import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/categoryModel';
import { Movie } from '../models/movieModel';
import { AlterifyService } from '../services/aleterify.service';
import { CategoryService } from '../services/category.service';
import { MovieAddService } from '../services/movieAdd.service';
import { DataChecker } from '../utils/dataChecker';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  providers:[CategoryService,MovieAddService,AlterifyService,DataChecker]
})
export class MovieAddComponent implements OnInit {

  movieModel:any={};
  categoryNames:Category[];
  categoryService:CategoryService;
  movieAddService:MovieAddService;
  alertifyService:AlterifyService;
  dataChecker:DataChecker;
  router:Router;
  constructor(categoryService:CategoryService,movieAddService:MovieAddService,
    alertifyService:AlterifyService,dataChecker:DataChecker,
    router:Router) { 
    this.categoryService = categoryService;
    this.movieAddService = movieAddService;
    this.alertifyService=alertifyService;
    this.dataChecker=dataChecker;
    this.router=router;
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories=>{
      this.categoryNames = categories;
    });
  }
  cleanForm(){
    this.movieModel={}
  }
  addMovie(title:any,categoryId:any,imdbPoint:any,imageUrl:any,description:any,screenWriters:any,filmDirectors:any,publishedDate:any){
        if(this.dataChecker.checkIfAllTrue(title,categoryId,imdbPoint,imageUrl,description,screenWriters,filmDirectors,publishedDate)){
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
            this.router.navigate(['/movies',movie.id])
            this.alertifyService.success(movie.title+" Eklendi")
            });
        }else{
            this.dataChecker.notification(title,imageUrl,description);
            this.alertifyService.error("Bilgileri Tam Girin")
            }
        }
  }