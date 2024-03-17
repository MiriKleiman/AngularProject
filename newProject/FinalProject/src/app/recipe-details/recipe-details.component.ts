import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'bootstrap';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

details!: Recipe;
codeRecipe!: number;
ibutton!:boolean;
keys!:string[]
firstKey!:number
firstKey1!:string
tmp1!:string
tmp3:boolean=false

firstValue!:string
constructor(private connectApiService:ConnectApiService,
  private route:ActivatedRoute,private router:Router){
}
  ngOnInit(): void {

    this.route.params.subscribe(param => {
      // השגת הנתונים שהתקבלו מה-URL והשמתם במשתנה recipe
      this.codeRecipe = param['codeRecipe']
    });
    this.connectApiService.getRecipeDetailsById(this.codeRecipe??2).subscribe({
      next:(res)=>{
        this.details=res
        console.log(this.details.recipe_code ,this.details.the_list_of_components,"recipeCodeDet")
      if(this.details.user_code_that_entered_the_recipe?.id===Number(sessionStorage.getItem("id")))
      {
        this.tmp3=true;
      }
      },
      error:(err)=>{
      }
    })
// console.log(this.details.user_code_that_entered_the_recipe.userName,this.details.user_code_that_entered_the_recipe.password)
  }

  put():void{
    this.router.navigate(["edit-recipe",this.codeRecipe])
  }
  getRange(max: number): number[] {
    return Array.from({length: max}, (_, i) => i);
  }

  deletee() {
    this.connectApiService.deleteRecipe(this.details.user_code_that_entered_the_recipe?.id??-1).subscribe({
      next:(res)=>{
        alert("המתכון הוסר בהצלחה")
        this.router.navigate(["all-recipes"])
      },
      error:()=>{}
      }
    )
    }
}
