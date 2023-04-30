import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Observable, catchError, throwError } from 'rxjs';
import { ICartItem } from '../_models/CartItem';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  public userid: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/CardItem';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  }

  GetCartItems(userid:any){
    let params = new HttpParams().set('CustomerID', userid);

    return this.httpClient.get<ICartItem[]>(`${this.baseurl}/Getlistofcard`,{params: params}).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}