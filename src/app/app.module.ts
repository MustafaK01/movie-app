import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { FilmFilterPipe } from './pipes/filmFilter.pipe';
import { AlterifyService } from './services/aleterify.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';

import { ErrorInterceptor } from './services/error.interceptor';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ParentMoviesComponent } from './movies/parent-movies/parent-movies.component';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    FilmFilterPipe,
    MovieAddComponent,
    CategoryAddComponent,
    AuthComponent,
    ParentMoviesComponent,
    AlertComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AlterifyService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
