import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movieModel';
import { AlterifyService } from '../../shared/alert/aleterify.service';
import { AuthService } from '../../auth/AuthService';
import { MovieService } from '../movie.service';
import { ErrorHandle } from 'src/app/utils/errorHandle';
import { getCommentModel } from './getComment.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers : [MovieService,ErrorHandle]
})
export class MovieDetailsComponent implements OnInit {
  errorMessage:any;
  movie:Movie;
  leaveeComment:boolean=false;
  seeCommentss:boolean=false;
  comments:getCommentModel[]=[];
  userName:string;
  loading : boolean = false;
  movieName:string;
  private router:Router;
  private alertify : AlterifyService;
  private activatedRoute:ActivatedRoute;
  private movieService:MovieService;
  private authService:AuthService;
  constructor(alertify : AlterifyService,movieService:MovieService,
    activatedRoute:ActivatedRoute,authService:AuthService,router:Router) {
    this.alertify = alertify;
    this.movieService = movieService;
    this.activatedRoute = activatedRoute;
    this.movieService=movieService;
    this.authService = authService;
    this.router=router;
  }

  ngOnInit(): void {
    this.authService.user.subscribe(userName=>{
      if(userName){
        this.userName=(userName.email.substring(0,userName.email.indexOf("@")));
      }
    })
    this.activatedRoute.params.subscribe(params=>{ 
      this.loading = true;
       this.movieService.getMovieDetail(params["movieId"]).subscribe(data=>{
         this.movie=data;
         this.movieName=data.title;
         this.loading = false;
       },(error=>{
        this.errorMessage=error;
        this.alertify.error("Hata !")
        this.loading = false;
       }));
    })
    this.movieService.getComments().subscribe(data=>{
      setTimeout(() => {
        for(let k in data){
          if(data[k].movieName.includes(this.movieName)){
            this.comments.push(data[k]);
          }
        }
      }, 1000);
   })
  }
  leaveComment(){
    this.leaveeComment = true;
    this.seeCommentss=false;

  }
  sendComment(comment:string){
    this.leaveeComment = false;
    this.movieService.senddComment({comment:comment,userName:this.userName,forWhichMovie:this.movieName}).subscribe(
      data=>{console.log(data)
      }
    );
    this.router.navigate(["/movies"])
    this.alertify.success("Yorumunuz Gönderildi")
  }
  seeComments(){
    this.leaveeComment=false;
    this.seeCommentss=true;

  }
}

