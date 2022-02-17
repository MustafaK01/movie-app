import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movieModel';

@Pipe({
  name: 'filmFilter'
})
export class FilmFilterPipe implements PipeTransform {

  temp:Movie[];
  transform(movies:Movie[],searchedMovie:string):Movie[] {
    searchedMovie = searchedMovie.toLowerCase()
    this.temp = movies.filter((i:Movie)=>i.title.toLowerCase().includes(searchedMovie)||i.screenWriters.toLowerCase().includes(searchedMovie))
    return this.temp
  }

}
