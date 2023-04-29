import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../CustomValidation/ConfirmPassword';
import { IRegister } from 'src/app/_models/register';
import {AuthService} from 'src/app/_services/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  RegisterForm:FormGroup;
  registeruser:IRegister={} as IRegister
  errorMessage:string=""
  fileToUpload: File | null = null;
  constructor(private fb:FormBuilder,private registertion:AuthService){
    this.RegisterForm=this.fb.group({
      UserName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      Email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      Password:['',[Validators.required]],
      ConfirmPassword  :['',[Validators.required]],
      PhoneNumber:['',[Validators.required,Validators.pattern("[0-9]+")
      ]],
       Image:['',[Validators.required]],
    },{validator:[ConfirmPasswordValidator]});

    
  }
 get Username(){
    return this.RegisterForm.get('UserName');
  }
  get Image(){
    return this.RegisterForm.get('Image');
  }
  get PhoneNumber(){
    return this.RegisterForm.get('PhoneNumber');
  }
  get Email(){
    return this.RegisterForm.get('Email');
  }
  get Password(){
    return this.RegisterForm.get('Password');
  }
  get Confirmpassword(){
    return this.RegisterForm.get('ConfirmPassword');
  }
  
  
  registerData(){
    this.registeruser.ConfirmPassword=this.Confirmpassword?.value
    this.registeruser.UserName=this.Username?.value
    this.registeruser.Password=this.Password?.value
    this.registeruser.Image=this.Image?.value
    this.registeruser.PhoneNumber=this.PhoneNumber?.value
    this.registeruser.Email=this.Email?.value
    
    // var formdata=new FormData();
    // formdata.append('UserName',this.Username?.value)   
    // formdata.append('ConfirmPassword',this.Confirmpassword?.value)   
    // formdata.append('Password',this.Password?.value)   
    // formdata.append('PhoneNumber',this.PhoneNumber?.value)   
    // formdata.append('Email',this.Email?.value)   
    // formdata.append('Image',this.Image?.value)   
    // const fileInput = document.getElementById('formFile') as HTMLInputElement;
   
    // const file = fileInput.files![0];
    // const reader = new FileReader();

    // reader.readAsDataURL(file);
    // console.log("hjhjjhj")
    // reader.onload = () => {
    //   const base64String = (reader.result as string).split(',')[1];
    //    const byteArray = new Uint8Array(atob(base64String).split('').map(char => char.charCodeAt(0)));
    //    this.registeruser.image=byteArray
    //    console.log(byteArray)
    //   };
  

     console.log(this.registeruser)
    this.registertion.register(this.registeruser).subscribe({
      next:data=>console.log(data),
      error:err=>this.errorMessage=err
     })
  }

imageuplud(file:any){
  this.registeruser.Image=file.target.files[0]
}



}

