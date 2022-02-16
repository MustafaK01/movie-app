import { Category } from "./categoryModel";

export class CategoryRepository{
    private category:Category[];
    constructor(){
        this.category=[
            {categoryId:1,categoryName:"Bilim Kurgu"},
            {categoryId:1,categoryName:"Fantastik"},
            {categoryId:2,categoryName:"Dram"},
            {categoryId:3,categoryName:"Aksiyon"},
            {categoryId:4,categoryName:"Bilim Kurgu"}];
    }

    getCategory():Category[]{
        return this.category;
    }
    getCategoryById(id:number):Category|undefined{
        return this.category.find(i=>i.categoryId==id)
    }


}