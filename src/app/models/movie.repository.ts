import { Movie } from "./movieModel";

export class MovieRepository{
    private movies:Movie[];
    constructor(){
        this.movies=[{id:1,title:"Yüzüklerin Efendisi(Lord Of The Rings)",description:"Yüzüklerin Efendisi(Lord Of The Rings) Açıklama",imageUrl:"lotr.jpg",isPopular:true},
        {id:2,title:"Yıldızlararası(Interstellar)",description:"Yıldızlararası(Interstellar) Açıklama",imageUrl:"interstellar.jpg",isPopular:true},
        {id:3,title:"Aman Tanrım(Bruce Almighty)",description:"Aman Tanrım(Bruce Almighty) Açıklama",imageUrl:"bruceAlmighty.jpg",isPopular:false},
        {id:3,title:"Matrix",description:"Matrix Açıklama",imageUrl:"matrix.jpg",isPopular:true},
        {id:4,title:"Sil Baştan (Eternal Sunshine Of Spotless Mind)",description:"Sil Baştan (Eternal Sunshine Of Spotless Mind) Açıklama",imageUrl:"eternalSunshineOfSpotlessMind.jpg",isPopular:false}];
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