import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { RecipeDetailsComponent } from "../recipe-details/recipe-details.component";
import { AddRecipeComponent } from "../add-recipe/add-recipe.component";
import { Category } from '../models/category.model';
import { CategoryServiceService } from '../category-service.service';

@Component({
    selector: 'app-all-recipes',
    standalone: true,
    templateUrl: './all-recipes.component.html',
    styleUrl: './all-recipes.component.css',
    imports: [FormsModule,
        ReactiveFormsModule, CommonModule, SmallRecipeComponent, RecipeDetailsComponent]
})
export class AllRecipesComponent implements OnInit{
  public recipesList: Recipe[] = [];
  public recipesListByFilter: Recipe[] = [];
  public categoryList: Category[] = []
  filterForm: FormGroup = new FormGroup({
    categoryId: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    durinigTimeOfPreparation: new FormControl<number | null>(null),
  })
add() {
  this.route.navigate(["add-recipe"])
}
  recipeList!:Recipe[]
  constructor(private connectApiService:ConnectApiService,private categoryService:CategoryServiceService,
    private route:Router){
  }
  ngOnInit(): void {
    console.log(this.recipesList,"rrrr")
    this.filterForm.valueChanges.subscribe(form=>{
      this.recipesListByFilter=this.recipesList
    if(form.categoryId)
    {
      this.recipesListByFilter=this.recipesList.filter(r=>r.category_code?.id===+form.categoryId);
      console.log("zzz",this.recipesListByFilter)

    }
      if(form.name)
      this.recipesListByFilter=this.recipesListByFilter.filter(r=>r.recipe_name?.toLocaleLowerCase().includes(form.name.toLocaleLowerCase()))
      if(form.durinigTimeOfPreparation)
      this.recipesListByFilter=this.recipesListByFilter.filter(r=>r.preparation_time_in_minutes<=form.durinigTimeOfPreparation)
})
      this.connectApiService.getRecipeList().subscribe({
        next: (res) => {
         this.recipesList=res
         this.recipesListByFilter=this.recipesList
          console.log(this.recipeList,"logg1");
        },
        error: (err) => {
          console.log(err);
        }
      })
      this.categoryService.getCategories().subscribe({
        next: (res) => {
          this.categoryList = res
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
