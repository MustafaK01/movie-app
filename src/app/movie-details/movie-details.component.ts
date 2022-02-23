import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movieModel';
import { AlterifyService } from '../services/aleterify.service';
import { AuthService } from '../services/AuthService';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers : [MovieService]
})
export class MovieDetailsComponent implements OnInit {
  errorMessage:any;
  movie:Movie;
  leaveeComment:boolean=false;
  userId:string;
  loading : boolean = false;
  private alertify : AlterifyService;
  private activatedRoute:ActivatedRoute;
  private movieService:MovieService;
  private authService:AuthService;
  constructor(alertify : AlterifyService,movieService:MovieService,
    activatedRoute:ActivatedRoute,authService:AuthService) {
    this.alertify = alertify;
    this.movieService = movieService;
    this.activatedRoute = activatedRoute;
    this.movieService=movieService;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.user.subscribe(userId=>{
      this.userId=userId.userId;
    })
    this.activatedRoute.params.subscribe(params=>{ 
      this.loading = true;
       this.movieService.getMovieDetail(params["movieId"]).subscribe(data=>{
         this.movie=data;
         this.loading = false;
       },(error=>{
        this.errorMessage=error;
        this.alertify.error("Hata !")
        this.loading = false;
       }));
    })
  }
  leaveComment(){
    this.leaveeComment = true;
  }

}

