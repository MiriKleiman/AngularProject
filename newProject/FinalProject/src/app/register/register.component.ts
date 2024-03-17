import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConnectApiService } from '../connect-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../models/register.model';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public response!: boolean
  reg!:string
  good:boolean=true
  static counter:number=4
  DetailsForm: FormGroup = new FormGroup({

    "id": new FormControl(RegisterComponent.counter, [Validators.required, Validators.minLength(0)]),
    "userName": new FormControl("", [Validators.required, Validators.minLength(1)]),
    "adress": new FormControl("", [Validators.required, Validators.minLength(1)]),
    "email": new FormControl("", [Validators.required, Validators.minLength(11)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(1)])
  });
  constructor(private connectApiService: UserServiceService,
    private router: Router,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      // השגת הנתונים שהתקבלו מה-URL והשמתם במשתנה recipe
      this.reg = param['login']
      // this.count+=1

    });


    // this.route.params.subscribe()
  //  recipee:Recipe
  }
  register() {
    if(!this.DetailsForm.valid)
    {
    alert("בדוק שדות קלט")
    this.good=false
    }
  else
  {
    this.connectApiService.addRegister(this.DetailsForm.value as User).subscribe(
      {
        error: (err) => {this.response = true; if(err.status===400) alert("מלא שדות חובה"),console.log(err)},
        next: () => {
          RegisterComponent.counter++;
          alert("נרשמת בהצלחה")
          sessionStorage.setItem("id",(this.DetailsForm.value.id).toString());
          this.router.navigate(["all-recipes"])
          // this.response=response

        }
      }
    )
  }}
}
