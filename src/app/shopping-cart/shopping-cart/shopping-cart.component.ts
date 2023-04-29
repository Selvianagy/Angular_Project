import { Component } from '@angular/core';
import { ICartItem } from 'src/app/_models/CartItem';
import { ShoppingcartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

   CartItemlist:ICartItem[]=[]
   numberofcart:number=0
   UserId:string|null=localStorage.getItem('userid')
   errorMessage:string=""
   input_quantity:number=0
  constructor(private shoppcart:ShoppingcartService){
    
  }

  ngOnInit() {
    this.shoppcart.GetCartItems(this.UserId).subscribe({
      next:data=>{
        this.CartItemlist=data
        this.numberofcart=this.CartItemlist.length
        this.CartItemlist.forEach(function (value) {
          value.totalPrice=value.mainProduct.priceAfterDiscount*value.product_Quantity
      });
      },
      error:err=>this.errorMessage=err
     })
   
  }
  CalculateTotalPrice(){

  }
}
