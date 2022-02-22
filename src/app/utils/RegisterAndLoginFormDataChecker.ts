import { Injectable } from "@angular/core";
import { AlterifyService } from "../services/aleterify.service";

@Injectable()
export class RegisterAndLoginFormDataChecker{
    alertify:AlterifyService;
    constructor(alertify:AlterifyService){
        this.alertify=alertify;
    }
    mailDomains:string[]=["@gmail.com","@outlook.com","@yahoo.com"];

    checkIfEntered(...args: any[]):boolean{
        for (let i = 0; i < args.length; i++) {
            if(args[i]=="") return false;
            }
            return true;
    }
    checkIfTheEmailIsEntered(param:any):boolean{
        for(let i = 0;i<this.mailDomains.length;i++){
            if(param.substring(param.indexOf("@"),param.length)==this.mailDomains[i]){
                return true;
            }
        }
        return false;
    }

    
}