import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)} ,
  {path:'register',loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
  {path:'register/:login',loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
  {path:'add-recipe',loadComponent: () => import('./add-recipe/add-recipe.component').then(c => c.AddRecipeComponent) },
  {path:'all-recipes',loadComponent: () => import('./all-recipes/all-recipes.component').then(c => c.AllRecipesComponent) },
  {path:'details-recipe/:codeRecipe',loadComponent: () => import('./recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent) },
  {path:'edit-recipe/:codeRecipe',loadComponent: () => import('./edit-recipe/edit-recipe.component').then(c => c.EditRecipeComponent) },
  {path:'logout',loadComponent: () => import('./logout/logout.component').then(c => c.LogoutComponent) }

];
