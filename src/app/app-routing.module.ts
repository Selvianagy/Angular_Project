import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
import { ErrorNotFoundComponent } from './notfound/error-not-found/error-not-found.component';
import { FaqComponent } from './faq/faq/faq.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import {LoginComponent} from "./login/login/login.component";
import {MainComponent} from "./main/main/main.component";
import { RegisterComponent } from './register/register/register.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
<<<<<<< HEAD
import { VendorRegisterComponent } from './register/vendor-register/vendor-register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
=======
>>>>>>> parent of 61a3bea ( Mobile,Tv and book filteration)

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  { path: '', component: MainComponent,
    children: [
      { path: '', component: MyHomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'cart', component: CartComponent,canActivate:[AuthGuard] },
      { path: 'checkout', component: CheckoutComponent ,canActivate:[AuthGuard]},
      { path: 'wishing-list', component: WishlistComponent ,canActivate:[AuthGuard]},
      {path:'product-details/',component:ProductDetailsComponent},
      {path:'contactUs',component:ContactUsComponent},
      {path:'aboutUs',component:AboutUsComponent},
      { path: 'productItem', redirectTo: 'product', pathMatch: 'full' },
      { path: 'faq', component: FaqComponent },
      { path: '**', component: ErrorNotFoundComponent },
    ]
  },

  { path: '**', component: ErrorNotFoundComponent },

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
