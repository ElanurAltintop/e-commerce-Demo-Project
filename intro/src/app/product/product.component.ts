import { Component, OnInit } from '@angular/core';


//deklarasyon
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  name="Laptop"
  ngOnInit(): void {
  }
}
