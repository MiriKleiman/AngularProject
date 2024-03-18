import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit {

  @Input() recipe!: Recipe
  codeRecipe!: number
  DetailsForm: FormGroup = new FormGroup({
    "recipe_name": new FormControl<string>("", [Validators.required]),
    "category_code": new FormControl("", [Validators.required]),
    "preparation_time_in_minutes": new FormControl<number>(0, [Validators.required, ]),
    "difficulty_level_1_5": new FormControl<number>(0, [Validators.required, Validators.min(1), Validators.max(5)]),
    "the_list_of_components": new FormArray([], [Validators.required]),
    "preparation": new FormArray([], [Validators.required]),
    "image": new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    "recipe_code": new FormControl<number>(0),
    "the_date_the_recipe_was_added_to_the_website":new FormControl<string>(""),
    "user_code_that_entered_the_recipe":new FormControl("")
  });

  get the_list_of_components() {
    return this.DetailsForm.get('the_list_of_components') as FormArray;
  }

  addNewComponent(){
    this.the_list_of_components.push(new FormControl(''));
  }

  removeComponent(index:number){
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

  constructor(private connectApiService: ConnectApiService,
    private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      // השגת הנתונים שהתקבלו מה-URL והשמתם במשתנה recipe
      this.codeRecipe = param['codeRecipe']
    });
    this.connectApiService.getRecipeDetailsById(this.codeRecipe).subscribe({
      next: (res) => {
        this.DetailsForm.setValue({...res,preparation:[],the_list_of_components:[]});
        const the_list_of_componentsLength=res.the_list_of_components??[]
        for(let i=0; i<the_list_of_componentsLength.length;i++)
        {
          this.addNewComponent();
          this.the_list_of_components.controls[i].setValue(the_list_of_componentsLength[i])
        }
        const preparationLength=res.preparation??[]
        for (let i = 0; i < preparationLength.length; i++) {
          this.addNewPreparation();
          this.preparation.controls[i].setValue(preparationLength[i])
        }
        console.log(this.preparation)
        console.log(this.the_list_of_components)


      },
      error: (err) => {

      }
    })
  }
  keep() {

if(this.DetailsForm.invalid)
{
  console.log(this.DetailsForm.value)
  // alert("שדות חובה")
}
{

    this.connectApiService.putRecipe(this.DetailsForm.value).subscribe(
      {
        error: (err) =>
          console.log("תוכן התשובה:", err),
        next: (response) => {
          alert("השינוי בוצע בהצלחה")
          console.log("תוכן התשובה:", response);
          this.router.navigate(["all-recipes"])

          // this.response=response
        }
      }
    )
  }

}
  cancel() {
    this.router.navigate(["all-recipes"])
  }


}

