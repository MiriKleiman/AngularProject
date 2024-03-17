import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component";
import { AddRecipeComponent } from "../add-recipe/add-recipe.component";

@Component({
    selector: 'app-all-recipes',
    standalone: true,
    templateUrl: './all-recipes.component.html',
    styleUrl: './all-recipes.component.css',
    imports: [FormsModule,
        ReactiveFormsModule, CommonModule, SmallRecipeComponent, RecipeDetailsComponent]
})
export class AllRecipesComponent implements OnInit{
add() {
  this.route.navigate(["add-recipe"])
}
  recipeList!:Recipe[]
  constructor(private connectApiService:ConnectApiService,
    private route:Router){
  }
  ngOnInit(): void {
      this.connectApiService.getRecipeList().subscribe({
        next: (res) => {
         this.recipeList=res
          // console.log(res);
          // this.product = res
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
