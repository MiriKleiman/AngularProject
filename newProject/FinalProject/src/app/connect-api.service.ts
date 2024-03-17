import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { AllRecipesComponent } from './all-recipes/all-recipes.component'
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component'
import { RegisterComponent } from './register/register.component'
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { Register } from './models/register.model';
import { Recipe } from './models/recipe.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {

  constructor(private _http: HttpClient) { }

addRecipe(recipe: Recipe): Observable< Recipe >  {
    return this._http.post<Recipe>('http://localhost:5228/api/Recipe/addRecipe', recipe)
    // this.productsList.push(product)
  }

  getRecipeDetailsById(id: number): Observable< Recipe > {
    return this._http.get<Recipe>(`http://localhost:5228/api/Recipe/${id}`)
  }

  getRecipeList(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>('http://localhost:5228/api/Recipe/GetRecipeList')
  }


  putRecipe(recipe: Recipe) {
    return this._http.put('http://localhost:5228/api/Recipe', recipe)
  }

  listCategory(): Observable< Category[] > {
    return this._http.get<Category[]>(`http://localhost:5228/api/Category/listCategory`)
  }
   deleteRecipe(id:number){
    return this._http.delete(`http://localhost:5228/api/Recipe/${id}`)
   }
}
