import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../models/movie.repository';
import { Movie } from '../models/movieModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title:string="Film Listesi";
  movies:Movie[];
  popularMovies:Movie[];
  movieRepository:MovieRepository;

  constructor() { 
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }




}
