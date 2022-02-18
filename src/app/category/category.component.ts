import { Component, OnInit } from '@angular/core';
import { Category } from '../models/categoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  categoryService:CategoryService;
  constructor(categoryService:CategoryService) { 
    this.categoryService=categoryService;
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
