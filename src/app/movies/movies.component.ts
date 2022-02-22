import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movieModel';
import { AlterifyService } from '../services/aleterify.service';
import { MovieService } from '../services/movie.service';
import { ErrorHandle } from '../utils/errorHandle';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService,ErrorHandle]
})
export class MoviesComponent implements OnInit {

  title:string="Film Listesi";
  searchedMovie:string = "";
  errorMessage:any;
  filteredMovies:Movie[]=[];
  movies:Movie[]=[];
  today=new Date();
  loading : boolean = false;
  private alertify : AlterifyService;
  private movieService:MovieService;
  private activatedRoute:ActivatedRoute;
  constructor(alertify : AlterifyService,movieService:MovieService,
    activatedRoute:ActivatedRoute) {
    this.alertify = alertify;
    this.movieService = movieService;
    this.activatedRoute = activatedRoute;
    this.filteredMovies=this.movies;
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.loading = true;
      this.movieService.getMovies(params["categoryId"]).subscribe(data =>{
        this.movies=data
        this.filteredMovies=this.movies
        this.loading = false;
        },(error=>{
          this.loading = false;
          this.errorMessage=error;
          this.alertify.error("Hata!");
        }));
    });
  }  

  searchMovie(){
      this.filteredMovies = this.searchedMovie? 
      this.movies.filter((i:Movie)=>i.title.toLowerCase().includes(this.searchedMovie.toLowerCase())||
        i.screenWriters.toLowerCase().includes(this.searchedMovie.toLowerCase())||
        i.filmDirectors.toLowerCase().includes(this.searchedMovie.toLowerCase())):this.movies
  }

  addToList($event:any,movie:Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertify.success(movie.title+" listeye eklendi");
    }else{
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertify.warning(movie.title+" listeden çıkarıldı");
    }
  }

}
