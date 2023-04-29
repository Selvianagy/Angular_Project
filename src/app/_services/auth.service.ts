import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { ILogin } from '../_models/login';
import { IToken } from '../_models/Token';
import { Observable} from 'rxjs';
import { IRegister } from '../_models/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any = null;
  httpOptions: any;
  baseurl = 'http://localhost:5244/api/Account';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new Headers()
    }
  }

  login(body: ILogin){
    return this.httpClient.post<IToken>(`${this.baseurl}/login`, body, this.httpOptions);
  }

  setupUserProfile() {

    let userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.logout();
    }

    if (this.user)
      this.user.token = localStorage.getItem('token');
  }

  getUser() {
    let user: any = null;
    let userData = localStorage.getItem('user');
    if (userData) {
      user = JSON.parse(userData);
    }
    if (user != null) {
      console.log(localStorage.getItem('token'))
      user.token = localStorage.getItem('token');
    }
    return user;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/login']);
  }


  register(user:any){
    return this.httpClient.post(`${this.baseurl}/register`, user);

  }

  registerVendor(vendor:any){
    return this.httpClient.post(`${this.baseurl}/vendorRegister`, vendor);

  }
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }
}
