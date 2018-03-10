import {Routes, RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { CartDetailsComponent } from './cart-details/cart-details.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent
  },
  {
    path: 'product',
    pathMatch: 'full',
    component: ProductDetailsComponent
  },
   {
    path: 'cart',
    pathMatch: 'full',
    component: CartDetailsComponent
  },

];