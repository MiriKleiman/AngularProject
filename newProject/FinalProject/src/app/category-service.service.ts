import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>('http://localhost:5228/api/Category/listCategory')
  }

}
