import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectApiService } from '../connect-api.service';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AllRecipesComponent } from '../all-recipes/all-recipes.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(private connectApiService:ConnectApiService,
    private route:Router){
  }
  register() {
    this.route.navigate(["register"])
  }
post() {
this.route.navigate(["add-recipe"])
}
look() {
this.route.navigate(["look"])
}
see() {
  this.route.navigate(["all-recipes"])
}
login() {
  this.route.navigate([""])
}
logout() {
  this.route.navigate(["logout"])
}

}
