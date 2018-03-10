import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../services/data.service';
import { Product } from '../models/product'
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  clicked:boolean=false;  //for checking if button is clicked
  data:Product=null;	    //storing product data
  constructor(private dataService: DataService,private router:Router) { }
  addToCart(product) {    //function for adding product to cart
    if(this.clicked) {
   this.router.navigate(['/cart'])
    }
    else {
    this.clicked=true;

    this.dataService.cart.push(product)
    this.dataService.totalPrice+=+product.price
    }
   
    }
  ngOnInit() {
  this.clicked=false;
  this.data = this.dataService.currentproduct
  if(this.data==undefined)
   this.router.navigate(['/'])

  }

}
