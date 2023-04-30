import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {

  constructor(private httpClient:HttpClient) { }

  getMobileBrand(value:any):Observable<any>{
    return this.httpClient.get('https://localhost:5244/api/Mobile/RelatedMobilesOfBrand')
}

getMobileStorage(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByStorageCapacity')
}

getMobileWeight(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByWeight')
}

getMobileRam(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByRAM')
}

getMobilePrice(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByPrice')
}

getMobileRate(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByRate')
}

getMobileCamera(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByNumberOfCamera')
}

getMobileDiscount(value:any):Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterWithSpecificDiscountAsync')
}

getMobileWaterProof():Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByIsWaterproof')
}

getMobileFrontCamera():Observable<any>{
  return this.httpClient.get('https://localhost:5244/api/Mobile/FilterByHasFrontCamera')
}
}
