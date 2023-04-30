import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from 'src/app/shared/product-service.service';
import { ProductDetailsComponent } from 'src/app/products/product-details/product-details.component';
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss'],
  providers:[ProductDetailsComponent]
})
export class MyHomeComponent {
  url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }


mobilesProducts:any[]=[];

ClothsProducts:any[]=[];

TvProducts:any[]=[];

ComputerProducts:any[]=[];

BooksProducts:any[]=[];
constructor(private productService:ProductServiceService) {}


  ngOnInit():void{
    this.productService.getMobiless().subscribe({
      next:(mobilesProducts)=>{
      this.mobilesProducts=mobilesProducts;
        console.log(this.mobilesProducts);
      }
    })

    this.productService.getClothes().subscribe({
      next:(ClothsProducts)=>{
      this.ClothsProducts=ClothsProducts;
        console.log(ClothsProducts);
      }
    })

    this.productService.getComputers().subscribe({
      next:(computers)=>{
        this.ComputerProducts=computers;
        console.log(computers)
      }
    })

    this.productService.getBooks().subscribe({
      next:(BooksProducts)=>{
        this.BooksProducts=BooksProducts;
        console.log(BooksProducts)
      }
    })

    this.productService.getTVs().subscribe({
      next:(TVs)=>{
        this.TvProducts=TVs;
        console.log(TVs)
      }
    })
    


  }

  getMobile(id:any):void
  {
    // console.log(id);
    // this.productDetails.getMobileDetail(id);
  }
}
