import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
      name:'summary'  
    }
)
export class SummaryPipe implements PipeTransform{
    transform(value: string,valueLimit?:number) {
        if(!value){
            return null;
        }
        valueLimit = valueLimit? valueLimit:20;
        if(valueLimit>value.length){
            return value;
        }
        else{
            return value.substring(0,valueLimit)+"..";
        }
    }

}
