import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { MovieAddComponent } from "./movie-add/movie-add.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesComponent } from "./movies.component";
import { ParentMoviesComponent } from "./parent-movies/parent-movies.component";

const routes:Routes = [
    {
        path:'movies',component:ParentMoviesComponent, canActivate:[AuthGuard], 
        children:[
          {path:'',component:MoviesComponent},
          {path:'category/:categoryId',component:MoviesComponent},
          {path:'add',component:MovieAddComponent},
          {path:':movieId',component:MovieDetailsComponent},
        ]
        }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
  
  })
  export class MoviesRoutingModule { 
  
  }
