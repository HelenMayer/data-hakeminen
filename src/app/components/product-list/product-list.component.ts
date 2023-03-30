import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Data/product';
import { products as data } from 'src/app/Data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  
  products: Product[] = data;
  term: string = '';
  // details: boolean | undefined;

  showDetails(model : Product){
    model.details = !model.details;
  }
}
