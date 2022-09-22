import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';

import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
   //lokal olarak servis kullanılıyor
})
export class CategoryComponent implements OnInit {
  constructor( private alertifyService: AlertifyService,
    private categoryService: CategoryService

  ) {}
  title = 'Kategori Listesi';
  category: Category[]; //tip belirlerken : değer atarken = kullanılır

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{this.category=data});
  }
}
