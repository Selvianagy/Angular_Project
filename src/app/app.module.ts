import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HttpClientModule} from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
=======

>>>>>>> parent of 61a3bea ( Mobile,Tv and book filteration)

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
<<<<<<< HEAD
    ReactiveFormsModule,
    RegisterModule,
    LoginModule,
    ShoppingCartModule

=======
>>>>>>> parent of 61a3bea ( Mobile,Tv and book filteration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
