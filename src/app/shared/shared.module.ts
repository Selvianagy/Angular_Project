import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Design/header/header.component';
import { FooterComponent } from './Design/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]

})
export class SharedModule { }
