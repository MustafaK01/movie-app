// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MovieRepository } from '../models/movie.repository';
import { Movie } from './movieModel';
import { AlterifyService } from '../shared/alert/aleterify.service';
import { AuthService } from '../auth/AuthService';
import { ErrorHandle } from '../utils/errorHandle';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService,ErrorHandle]//İlgili yerel servis componentin
  //Component dekoratörü altındaki providers dizisi içerisinde tanımlanır.
})
export class MoviesComponent implements OnInit {

  title:string="Film Listesi";
  searchedMovie:string = "";
  errorMessage:any;
  filteredMovies:Movie[]=[];
  movies:Movie[]=[];
  movieList:string[]=[]
  userId:string;
  today=new Date();
  loading : boolean = false;
  private alertify : AlterifyService;
  private movieService:MovieService;
  private activatedRoute:ActivatedRoute;
  private authService:AuthService;
  constructor(alertify : AlterifyService,movieService:MovieService,
    activatedRoute:ActivatedRoute,authService:AuthService) {
    this.alertify = alertify;
    this.movieService = movieService;
    this.activatedRoute = activatedRoute;
    this.filteredMovies=this.movies;
    this.authService=authService;
  }
  
  ngOnInit(): void {
    this.authService.user.subscribe(userId=>{
      if(userId){      
        this.userId=userId.userId;
        this.activatedRoute.params.subscribe(params=>{
          this.loading = true;
          this.movieService.getMovies(params["categoryId"]).subscribe(data =>{
            this.movies=data
            this.filteredMovies=this.movies
            this.movieService.getList(this.userId).subscribe(data=>{
              this.movieList=data;
            })
            this.loading = false;
            },(error=>{
              this.loading = false;
              this.errorMessage=error;
              this.alertify.error("Hata!");
            }));
        });}
    })
  
  }  
  getButtonStatus(movie:Movie){
    return this.movieList.findIndex(mv=>mv===movie.id) > -1
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
      this.movieService.addTList({userId:this.userId,movieId:movie.id}).subscribe(
        data=>this.alertify.success(movie.title+" listeye eklendi")
      )
    }else{
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.movieService.removeFromList({userId:this.userId,movieId:movie.id}).subscribe(
        data=>this.alertify.warning(movie.title+" listeden çıkarıldı")
      )
    }
  }

}
