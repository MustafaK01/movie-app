import { Movie } from "./movieModel";

export class MovieRepository{
    private movies:Movie[];
    constructor(){
        this.movies=[{id:1,title:"Yüzüklerin Efendisi(Lord Of The Rings)",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id incidunt harum maxime libero est exercitationem unde explicabo? Officiis quis illum cupiditate quasi dicta corporis non est impedit vel a!" ,imageUrl:"lotr.jpg",isPopular:true,publishedDate:new Date(2001,12,21),screenWriters:"Peter Jackson, Philippa Boyens, Fran Walsh",filmDirectors:"Peter Jackson"},
        {id:2,title:"Yıldızlararası(Interstellar)",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id incidunt harum maxime libero est exercitationem unde explicabo? Officiis quis illum cupiditate quasi dicta corporis non est impedit vel a!",imageUrl:"interstellar.jpg",isPopular:true,publishedDate:new Date(2014,11,7),screenWriters:"Christopher Nolan, Jonathan Nolan",filmDirectors:"Christopher Nolan"},
        {id:3,title:"Aman Tanrım(Bruce Almighty)",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id incidunt harum maxime libero est exercitationem unde explicabo? Officiis quis illum cupiditate quasi dicta corporis non est impedit vel a!",imageUrl:"bruceAlmighty.jpg",isPopular:false,publishedDate:new Date(2003,9,5),screenWriters:"Steve Oedekerk, Steve Koren, Mark O'Keefe",filmDirectors:"Tom Shadyac"},
        {id:3,title:"Matrix",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id incidunt harum maxime libero est exercitationem unde explicabo? Officiis quis illum cupiditate quasi dicta corporis non est impedit vel a!",imageUrl:"matrix.jpg",isPopular:true,publishedDate:new Date(1999,9,3),screenWriters:"Lana Wachowski, Lilly Wachowski",filmDirectors:"Lana Wachowski, Lilly Wachowski"},
        {id:4,title:"Sil Baştan (Eternal Sunshine Of Spotless Mind)",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id incidunt harum maxime libero est exercitationem unde explicabo? Officiis quis illum cupiditate quasi dicta corporis non est impedit vel a!",imageUrl:"eternalSunshineOfSpotlessMind.jpg",isPopular:false,publishedDate:new Date(2006,5,26),screenWriters:"Charlie Kaufman",filmDirectors:"Michel Gondry"}];
    }
    getMovies():Movie[]{
        return this.movies;
    }
    getMovieById(id:number):Movie|undefined{
        return this.movies.find(i=>i.id==id);
    }
    getPopularMovies(){
        return this.movies.filter(i=>i.isPopular);
    }
}