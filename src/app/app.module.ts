import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


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
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MovieService } from './services/movie.service';
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
    MovieAddComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // FontAwesomeModule,
  ],
  providers: [
    AlterifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
