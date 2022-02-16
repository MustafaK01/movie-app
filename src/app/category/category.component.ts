import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../models/category.repository';
import { Category } from '../models/categoryModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  categoryRepository:CategoryRepository;  
  constructor() { 
    this.categoryRepository = new CategoryRepository();
    this.categories=this.categoryRepository.getCategory();
  }

  ngOnInit(): void {
  }

}
