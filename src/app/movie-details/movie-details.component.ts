import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movieModel';
import { AlterifyService } from '../services/aleterify.service';
import { MovieDetailsService } from '../services/movieDetails.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers : [MovieDetailsService]
})
export class MovieDetailsComponent implements OnInit {
  errorMessage:any;
  movie:Movie;
  addedMessage:string;
  loading : boolean = false;
  private alertify : AlterifyService;
  private activatedRoute:ActivatedRoute;
  private movieDetailsService:MovieDetailsService
  constructor(alertify : AlterifyService,movieDetailsService:MovieDetailsService,
    activatedRoute:ActivatedRoute) {
    this.alertify = alertify;
    this.movieDetailsService = movieDetailsService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{ 
      this.loading = true;
       this.movieDetailsService.getMovieDetail(params["movieId"]).subscribe(data=>{
         this.movie=data;
         this.loading = false;
       },(error=>{
        this.errorMessage=error;
        this.alertify.error("Hata !")
        this.loading = false;
       }));
    })
  }
  addToList($event:any,movie:Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.addedMessage = "Listeye Eklendi";
    }else{
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.addedMessage = "Listeden Çıkarıldı";
    }
  }

}
