import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { ParentMoviesComponent } from './movies/parent-movies/parent-movies.component';


const routes:Routes = [
  {path:'category',redirectTo:'movies',pathMatch:'full'},
  
  {
  path:'movies',component:ParentMoviesComponent, canActivate:[AuthGuard], 
  children:[
    {path:'',component:MoviesComponent},
    {path:'category/:categoryId',component:MoviesComponent},
    {path:'add',component:MovieAddComponent},
    {path:':movieId',component:MovieDetailsComponent},
  ]
  },
  {path:'category/add',component:CategoryAddComponent,canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],

})
export class AppRoutingModule { 

}
