import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from "./products.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
