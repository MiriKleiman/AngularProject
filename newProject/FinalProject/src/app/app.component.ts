import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, AddRecipeComponent, TopBarComponent]
})
export class AppComponent {
  title = 'FinalProject';
}
