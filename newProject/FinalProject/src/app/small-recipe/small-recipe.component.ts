import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Route, Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { reduce } from 'rxjs';
import { MyTimePipe } from "../pipes.pipe";
@Component({
    selector: 'app-small-recipe',
    standalone: true,
    templateUrl: './small-recipe.component.html',
    styleUrl: './small-recipe.component.css',
    imports: [FormsModule,
        ReactiveFormsModule, CommonModule, MyTimePipe]
})
export class SmallRecipeComponent implements OnInit {
  @Input() recipee !:Recipe;

   recipeId!:number
  constructor(private connectApiService:ConnectApiService,
    private route:Router){
  }
  recipeDetails():void
  {
    if(sessionStorage.getItem("id"))
    {
    this.route.navigate(["details-recipe",this.recipee.recipe_code])
  console.log(this.recipee.recipe_code ,this.recipee.the_list_of_components,"recipeCode")}
  else
  alert("עליך לבצע כניסה לאתר כדי לראות את הפרטים")
  }

  ngOnInit(): void {
  }


  getRange(max: number): number[] {
    return Array.from({length: max}, (_, i) => i);
  }
}
