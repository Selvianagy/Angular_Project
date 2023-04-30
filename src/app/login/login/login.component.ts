import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { IToken } from 'src/app/_models/Token';
import { ILogin } from 'src/app/_models/login';
import {AuthService} from 'src/app/_services/auth.service'
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm:FormGroup;
  loginuser:ILogin={} as ILogin
  errorMessage:string=""
  Token:any={}
  public jwtHelper: JwtHelperService = new JwtHelperService();
  Userid:string=""
  constructor(private fb:FormBuilder,private login:AuthService,private router:Router){
    this.LoginForm=fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  ngOnInit(){
    
  }
  get UserName(){
    return this.LoginForm.get('userName');
  }
  get Password(){
    return this.LoginForm.get('password');
  }
  loginData(){
    this.loginuser.userName=this.UserName?.value;
    this.loginuser.password=this.Password?.value;
    this.login.login(this.loginuser).subscribe({
      next:data=>{
        this.Token=data
        localStorage.setItem('token',this.Token.token)
        const decodedToken = this.jwtHelper.decodeToken(this.Token.token);
        this.Userid=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
        localStorage.setItem('userid',this.Userid)
        console.log(localStorage.getItem('userid'))

        this.router.navigate([""]);
      },
      error:err=>this.errorMessage=err
    })
   // 

    
  }
  
}
