import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }
//Books
  getBooks():Observable<any>{
      return this.httpClient.get('https://localhost:5244/api/Book')
  }


//Cloths
  getClothes():Observable<any>{
    return this.httpClient.get('http://localhost:5244/api/Clothing/GetAllCloths')
  }
 
  //Computers
  getComputers():Observable<any>{
      return this.httpClient.get('http://localhost:5244/api/Computer/GetAllComputers')
  }

 

  getTVs():Observable<any>{
      return this.httpClient.get('http://localhost:5244/api/TV')
  }
  

  //mobile
  getMobiless():Observable<any>{
    return this.httpClient.get('http://localhost:5244/api/Mobile/GetMobiles')
  }

  //productDetials
  getMobilesDetails(name:any,id:any):Observable<any>{
    console.log(this.httpClient.get(`http://localhost:5244/api/${name}/${id}`));
    return this.httpClient.get(`http://localhost:5244/api/${name}/${id}`)
  }

  getMobileBrand(brandname:any):Observable<any>{
    console.log(brandname)
    return this.httpClient.get(`https://localhost:5244/api/Mobile/RelatedMobilesOfBrand?brandname=${brandname}`)
}

}
