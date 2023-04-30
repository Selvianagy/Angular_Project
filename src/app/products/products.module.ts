import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobileComponent } from './mobile/mobile.component';

import { BookComponent } from './book/book.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ComputerComponent } from './computer/computer.component';
import { TvComponent } from './tv/tv.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    MobileComponent,
   
    BookComponent,
    ClothingComponent,
    ComputerComponent,
    TvComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
