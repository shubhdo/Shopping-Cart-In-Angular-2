import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import {
  DataService
} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {	
  constructor(private dataService: DataService,private router:Router) { }
  data: any = []

   getData = function () { //function to fetch all products
    this.dataService.getProducts().subscribe((data) => {
     this.data= data
    })


  }
  showDetails(product) {   //function for navigating to show product details
  	this.dataService.currentproduct=product
    this.router.navigate(['/product'])

    }

    addToCart(product) {   //function for adding product to cart
    this.dataService.cart.push(product)
    this.dataService.totalPrice+=+product.price

    }
  ngOnInit() {
  this.getData();
  }

}
