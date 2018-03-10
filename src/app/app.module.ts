import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {DataService} from './services/data.service';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { routes } from './app.routes';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ModalModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
