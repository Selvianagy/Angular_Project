import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/shared/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(private activeRoute:ActivatedRoute ,private productService:ProductServiceService){

  }
  CategoryDetails:any={
  
  };
 getMobileDetail(id:any)
 {
  this.activeRoute.paramMap.subscribe({
    next:(params)=>{
      const Id=params.get('i')
    }
  })
  // this.productService.getMobilesDetails(,id).subscribe({
  //   next:( moileDetails)=>{
  //   this.moileDetails= moileDetails;
  //     console.log( id);    
  //   }
  // })
}
url: string = "../assets/IPhone.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }
rating: any=4;
onClick(rating: number) {
  this.rating = rating;
}
Category:any='';
MobileCategory:any="Mobile";
BookCategory:any='Book';
ComputerCategory:any="Computer";
TVCategory:any="TV";
ClothingCategory:any="Clothing"


ngOnInit(): void {
  this.activeRoute.paramMap.subscribe({
    next:(params)=>{
      const Id=params.get('id')
      const name=params.get('name')
      this.Category=name;
      
      this.productService.getMobilesDetails(name,Id).subscribe({
        next:( CategoryDetails)=>{
        this.CategoryDetails= CategoryDetails;
          console.log( Id,"gettingdata", this.Category); 

        }
      })
    
   
    }
  })
}
}
