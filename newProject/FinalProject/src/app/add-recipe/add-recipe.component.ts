import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import Swal from 'sweetalert2';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit{
  category!:Category[]
  condition:boolean=true
  check:boolean=false
  static counter=8
  DetailsForm: FormGroup = new FormGroup({
    "recipe_code": new FormControl<number>(AddRecipeComponent.counter),
    "recipe_name": new FormControl<string>("", [Validators.required]),
    // "category_code": new FormControl<Category>({id: 0, name: "", routing_to_icon: ""}, [Validators.required]),
    "preparation_time_in_minutes": new FormControl<number>(0, [Validators.required]),
    "difficulty_level_1_5": new FormControl<number>(1, [Validators.required, Validators.min(1), Validators.max(5)]),
    "the_list_of_components": new FormArray([]),
    "preparation": new FormArray([]),
    "image": new FormControl<string>("", [Validators.required]),
    "the_date_the_recipe_was_added_to_the_website": new FormControl("", [Validators.required]),
    "User_code_that_entered_the_recipe": new FormControl<User>({id: sessionStorage['id'], userName: sessionStorage['name']??"", adress: "",email: "", password: ""}),
  });

  get the_list_of_components() {
    return this.DetailsForm.get('the_list_of_components') as FormArray;
  }

  addNewcomponent(){
    this.the_list_of_components.push(new FormControl(''));
  }

  removecomponent(index:number){
    this.the_list_of_components.removeAt(index)
  }

  get preparation() {
    return this.DetailsForm.get('preparation') as FormArray;
  }

  addNewPreparation(){
    this.preparation.push(new FormControl(''));
  }

  removePreparation(index:number){
    this.preparation.removeAt(index)
  }




  constructor(private connectApiService: ConnectApiService,  private _formBuilder: FormBuilder,
    private router: Router     ) {

  }

  ngOnInit(): void {

    // this.DetailsForm.controls["User_code_that_entered_the_recipe.userName"].setValue(sessionStorage['name'])
    console.log(sessionStorage['name'])
    this.connectApiService.listCategory().subscribe({
      next: (res) => {
        this.category=res
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  showAlert(): void {
    // this.addRecipe()
    Swal.fire({
      title: 'הודעת ה-Alert',
      text: 'המתכון נוסף בהצלחה',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        // this.otherComponent.doSomething();

        this.router.navigate(["all-recipes"])
      }
    });
  }

  addRecipe1(): void{
    console.log("cod",this.DetailsForm.controls["recipe_code"].value)
    if(this.DetailsForm.invalid)
    alert("שדות חובה")

    console.log("aaa",this.DetailsForm.value)

    this.connectApiService.addRecipe(this.DetailsForm.value as Recipe ).subscribe(
      {
      error: (err) =>{
        if (err.status === 400)
        {
          alert("Error: One or more validation errors occurred.")}
      console.log("תוכן התשובה:" ,this.DetailsForm.value ),console.log("222תוכן התשובה:" ,Recipe )
      },
      next: (response) => {
        AddRecipeComponent.counter+=1
        this.showAlert();
      }
      }
    )

   }

   change():void{
    this.check=true
   }
}

