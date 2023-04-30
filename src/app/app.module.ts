import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HttpClientModule} from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';



import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';



import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,

    ReactiveFormsModule,
    RegisterModule,
    LoginModule,
    ShoppingCartModule,


    ReactiveFormsModule,
    RegisterModule,
    LoginModule,
    ShoppingCartModule,
    HomeModule,

    CommonModule,
    HomeModule,
    ProductsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
