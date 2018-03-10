import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from '../models/product'

@Injectable()
export class DataService {
  constructor(private http:Http) { }
 
cart:Product[]=[]    //for storing cart
currentproduct:Product; //for getting current product
totalPrice:number=0; 	//for storing total price of cart

getProducts() {			//api call for fetching product from local json file
	return this.http.get('assets/data.json').map(res=><Product[]>res.json())
}


}