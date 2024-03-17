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
    // "recipe_name": new FormControl<string>(""),
    // "category_code": new FormControl(""),
    // "preparation_time_in_minutes": new FormControl<number>(0),
    // "difficulty_level_1_5": new FormControl<number>(0, [Validators.required, Validators.min(1), Validators.max(5)]),
    // "the_list_of_components": new FormArray([]),
    // "preparation": new FormArray([]),
    // "image": new FormControl<string>(""),
    // "recipe_code": new FormControl<number>(0),
    // "the_date_the_recipe_was_added_to_the_website":new FormControl(""),
    // "user_code_that_entered_the_recipe":new FormControl("")
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
  // addProduct() {
  //   const lastControl = this.ProductsArray.at(this.ProductsArray.length - 1);
  //   if (lastControl.value.trim() !== '') {
  //     this.ProductsArray.push(this._formBuilder.control(''));
  //     console.log(this.ProductsArray);
  //   }
  // }

  // addPreparationStep() {
  //   const lastControl = this.InstructionsArray.at(
  //     this.InstructionsArray.length - 1
  //   );
  //   if (lastControl.value.trim() !== '') {
  //     this.InstructionsArray.push(this._formBuilder.control(''));
  //     console.log(this.InstructionsArray);
  //   }
  // }

  // removeEmptyproducts() {
  //   for (let i = this.ProductsArray.length - 1; i >= 0; i--) {
  //     if (this.ProductsArray.at(i).value.trim() === '') {
  //       this.ProductsArray.removeAt(i);
  //     }
  //   }
  // }

  // removeEmptyPreparationSteps() {
  //   for (let i = this.InstructionsArray.length - 1; i >= 0; i--) {
  //     if (this.InstructionsArray.at(i).value.trim() === '') {
  //       this.InstructionsArray.removeAt(i);
  //     }
  //   }
  // }
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
        // הפעלת הפונקציה בקומפוננטה המטרה
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
          // Handle 400 Bad Request error
        {
          alert("Error: One or more validation errors occurred.")}
      console.log("תוכן התשובה:" ,this.DetailsForm.value ),console.log("222תוכן התשובה:" ,Recipe )
      },
      // this.showAlert(),
      next: (response) => {
        AddRecipeComponent.counter+=1
        // console.log("תוכן התשובה:", response);
        this.showAlert();
        // this.response=response
        //
      }
      }
    )

   }

   change():void{
    this.check=true
   }
}


// <div id="container">
//     <ng-container *ngIf="recipe">
//         <div>
//             <h1>{{recipe.recipeName}}</h1>
//             <h3><img id="icon" src="{{recipe.categoryId.iconPath}}" alt="icon"> {{recipe.categoryId.name}} </h3>
//             <p>level:</p>
//             <div class="stars">
//                 <span class="star" *ngFor="let star of stars"><span>&#9733;</span></span>
//             </div>
//             <img src="{{recipe.imag7}}" alt="imag">
//             <h3>Ingredients:</h3>
//             <ul>
//                 <li *ngFor="let ingredient of recipe.ingredients">
//                     <!-- <img src="path_to_your_ingredient_icon" alt="Ingredient Icon">-->
//                     {{ ingredient }}
//                 </li>
//             </ul>
//             <h3>Preparation:</h3>
//             <ol>
//                 <li *ngFor="let step of recipe.preparation">{{ step }}</li>
//             </ol>
//         </div>
//     </ng-container>
// </div>
// <input type="button" value="deleteRecipe" (click)="deleteRecipe()">




// import { Component } from '@angular/core';
// import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Category } from '../models/category.model';
// import { CommonModule } from '@angular/common';
// import { RecipeServiceService } from '../services/recipe-service.service';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
// import { CategoryServiceService } from '../services/category-service.service';
// import { Recipe } from '../models/recipe.model';

// @Component({
//   selector: 'app-add-recipe',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './add-recipe.component.html',
//   styleUrl: './add-recipe.component.css'
// })
// export class AddRecipeComponent {

//   public res!: boolean;
//   ingredients = new FormArray([new FormControl("", [Validators.required])]);
//   preparation = new FormArray([new FormControl("", [Validators.required])]);

  // get ingredientsArray() {
  //   return this.ingredients as FormArray;
  // }
  // get preparationArray() {
  //   return this.preparation as FormArray;
  // }
  // RecipeForm: FormGroup = new FormGroup({
  //   "recipeName": new FormControl("", [Validators.required]),
  //   "password": new FormControl("", [Validators.required, Validators.minLength(3)]),
  //   "preparationTimeInMinutes": new FormControl("", [Validators.required]),
  //   "difficultyLevel": new FormControl("", [Validators.required, Validators.max(5), Validators.min(1)]),
  //   "imag7": new FormControl("", [Validators.required]),
  //   "dateOfAddTheRecipe": new FormControl("", [Validators.required]),
  //   "category": new FormControl("", [Validators.required]),
  //   ingredients: this.ingredients,
  //   preparation: this.preparation

  // })

  // constructor(private _categoryService: CategoryServiceService, private _recipeService: RecipeServiceService, private router: Router) { }
  // public CategoryList: Category[] = []
  // ngOnInit(): void {
  //   this._categoryService.getCategories().subscribe({
  //     next: (res) => {
  //       this.CategoryList = res
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  // changeIngredient(value: string | null, index: number) {
  //   if (this.ingredientsArray.length - 1 == index)
  //     this.ingredientsArray.push(new FormControl(""));
  // }
  // changePreparation(value: string | null, index: number) {
  //   if (this.preparationArray.length - 1 == index)
  //     this.preparationArray.push(new FormControl(""));
  // }
  // addRecipe() {
  //   if (this.ingredientsArray.at(this.ingredientsArray.length - 1).value==="")
  //     this.ingredientsArray.removeAt(this.ingredientsArray.length - 1)
  //     if (this.preparationArray.at(this.preparationArray.length - 1).value==="")
  //     this.preparationArray.removeAt(this.preparationArray.length - 1)
  //   this._recipeService.addRecipe(
  //     this.RecipeForm.value as Recipe).subscribe(
  //       {
  //         next: () => {
  //           this.res = true,
  //             this.router.navigate(["allRecipes"])
  //         }
  //       })
  // }
  // showAlert(): void {
  //   Swal.fire({
  //     title: 'הודעת ה-Alert',
  //     text: 'זו הודעה חשובה!',
  //     icon: 'success',
  //     confirmButtonText: 'OK'
  //   });
  // }
// }

