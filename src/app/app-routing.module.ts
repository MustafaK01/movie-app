import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAddComponent } from './movie-add/movie-add.component';


const routes:Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'movies/category/:categoryId',component:MoviesComponent},

  {path:'movies/category',redirectTo:'movies',pathMatch:'full'},
  
  {path:'movies/add',component:MovieAddComponent},
  {path:'movies/:movieId',component:MovieDetailsComponent}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { 

}
