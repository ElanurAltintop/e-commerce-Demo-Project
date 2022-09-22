import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
    ) {} //Bu componenetde bu nesne kullanılacak demek

  title = 'Ürün Listesi';
  filterText = ''; 
  products: Product[];

  ngOnInit() {
  this.activatedRoute.params.subscribe(params=>{
    this.productService.getProducts(params["categoryId"])
    .subscribe(data=>{this.products=data});
  })

    //component yüklendiği zaman burası çalışır
    //subscribe ile bu adresteki datayı istediğimizi belirtiyoruz
  }
  addToCart(product: any) {
    this.alertifyService.success(product.name + ' Kaydedildi.');
  }
  removeToCart(product: any) {
    this.alertifyService.error(product.name + ' Kaydedildi.');
  }
}
