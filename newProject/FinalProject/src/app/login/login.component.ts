import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { ConnectApiService } from '../connect-api.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AllRecipesComponent } from "../all-recipes/all-recipes.component";
import { UserServiceService } from '../user-service.service';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [
        FormsModule,
        ReactiveFormsModule, CommonModule,
        AllRecipesComponent
    ]
})
export class LoginComponent {
  public response: Object=false
  res!:string
  cnt:number=0
 UserDetailsForm:FormGroup= new FormGroup({
  "userName": new FormControl("", [Validators.required, Validators.minLength(0)]),
  "password": new FormControl("", [Validators.required, Validators.minLength(1)])
});
  constructor(private connectApiService:UserServiceService,
    private router:Router){

  }

  login(){
    // const sessionData = JSON.parse(sessionStorage.getItem('sessionData')) || [];
    // const sessionDataString = sessionStorage.getItem('sessionData');
    // const sessionData = sessionDataString ? JSON.parse(sessionDataString) : [];
  this.connectApiService.login(this.UserDetailsForm.value as User).subscribe(
  {
  error: (err) =>{
    this.res="לא רשום"
    ,this.router.navigate(["register",this.res])
  // sessionData.unshift(this.UserDetailsForm.value.password, JSON.stringify(this.UserDetailsForm.value.userName))
  // ,sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
  },
  next: (response) => {
    if(response)
    {this.response=response
    ,this.router.navigate(["all-recipes"])

    sessionStorage.setItem("id",(response.id??-1).toString());
    sessionStorage.setItem("name",(response.userName??"").toString());

    console.log(this.UserDetailsForm.value.password)

    // if(!response)
    // alert(response)
    // this.router.navigate(["all-recipes"])
    console.log("תוכן התשובה:", response);}
    else{
      this.cnt=this.cnt+1;
    }
  }
  }
)
console.log(sessionStorage)
  }

}

