import { Injectable } from "@angular/core";
import { AlterifyService } from "../shared/alert/aleterify.service";

@Injectable()
export class MovieFormDataChecker{
    alertify:AlterifyService;
    constructor(alertify:AlterifyService){
        this.alertify=alertify;
    }
    imageExtentions:string[]=[".jpg",".jpeg",".png",".webp",".raw"]
    checkIfEntered(...args: any[]):boolean{
        for (let i = 0; i < args.length; i++) {
            if(args[i]=="") return false;
            }
            return true;
    }
    checkImageUrl(param:any):string{
        for(let i = 0;i<this.imageExtentions.length;i++){
            if(param.substring(param.indexOf("."),param.length)==this.imageExtentions[i]){
                return param;
            }
        }
        return "Resim Yok";
    }
    checkImageIfExists(param:string):boolean{
        if(param=="Resim Yok") return false;
        return true;
    }
    checkMovieTitleLength(param:any):boolean{
        if(param.length<5||param.length>50) return false;
        return true;
    }
    checkMovieDescriptionLength(param:any):boolean{
        if(param.length<20) return false;
        return true;
    }
    checkIfAllTrue(title:any,categoryId:any,imdbPoint:any,imageUrl:any,description:any,screenWriters:any,filmDirectors:any,publishedDate:any){
        if(this.checkIfEntered(title,categoryId,imdbPoint,imageUrl,description,screenWriters,filmDirectors,publishedDate)&&
        this.checkImageIfExists(this.checkImageUrl(imageUrl))
        &&this.checkMovieTitleLength(title)&&
        this.checkMovieDescriptionLength(description)){
            return true;
        }
        return false;
    }
    notification(title:any,imageUrl:any,description:any):void{
        if(!this.checkImageIfExists(this.checkImageUrl(imageUrl))){
            this.alertify.error("Resim Yolunu Resmin Uzantısıyla Birlikte Belirtin")
        }
        if(!this.checkMovieTitleLength(title)){
            this.alertify.error("Filmin Başlığını Kontrol Ediniz")
        }
        if(!this.checkMovieDescriptionLength(description)){
            this.alertify.error("Açıklama Bilgisini Kontrol Ediniz")
        }
    }
}
