import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { CategoriesModule } from "../category/categories.module";
import { FilmFilterPipe } from "./filmFilter.pipe";
import { MovieAddComponent } from "./movie-add/movie-add.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { ParentMoviesComponent } from "./parent-movies/parent-movies.component";
import { SummaryPipe } from "./summary.pipe";

@NgModule({
    declarations:[
        ParentMoviesComponent,
        MoviesComponent,
        MovieDetailsComponent,
        SummaryPipe,
        FilmFilterPipe,
        MovieAddComponent,


        
    ],
    imports:[
        AppRoutingModule,
        RouterModule,
        CommonModule,
        FormsModule,
        MoviesRoutingModule,
        CategoriesModule
    ],
    exports:[]
})
export class MoviesModule{

}
