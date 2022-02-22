import { LocationStrategy } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/categoryModel';
import { AlterifyService } from '../services/aleterify.service';
import { CategoryAddService } from '../services/categoryAdd.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  providers:[CategoryAddService,AlterifyService]
})
export class CategoryAddComponent implements OnInit {

  categoryModel:any={}
  categoryAddService:CategoryAddService;
  router:Router;
  alertify:AlterifyService;
  constructor(categoryAddService:CategoryAddService,
    router:Router,alertify:AlterifyService) {
    this.categoryAddService=categoryAddService;
    this.router = router;
    this.alertify=alertify;
  }

  ngOnInit(): void {

  }
  addCategory(categoryName:string){

    if(categoryName!=""){
      const category:Category={
        categoryName:categoryName
      }
      this.categoryAddService.addCategory(category).subscribe(data=>{
        this.router.navigate(['/'])
        this.alertify.success("Kategori Eklendi")
      })
    }else{
      this.alertify.error("Alanları Doldurun")
    }
  }
}

