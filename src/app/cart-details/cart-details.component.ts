import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../services/data.service';
import { Product } from '../models/product'
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart:Product[]=[];
  totalPrice:number=0; 	
  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {  //showing cart data and total price on init

   this.cart = this.dataService.cart;
   this.totalPrice=this.dataService.totalPrice

}

}
