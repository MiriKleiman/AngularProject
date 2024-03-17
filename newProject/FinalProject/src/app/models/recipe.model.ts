import { Time } from "@angular/common"
import { Category } from "./category.model"
import { User } from "./user.model"

export class Recipe{
  // recipe_code!: number;
  // recipe_name!: string;
  // category_code!: Category;
  // preparation_time_in_minutes?: number;
  // difficulty_level_1_5!: number;
  // the_date_the_recipe_was_added_to_the_website?: Date;
  // the_list_of_components?: string[];
  // preparation?: string[];
  // user_code_that_entered_the_recipe?: User;
  // image!: string;
  recipe_code!: number;
  recipe_name?: string;
  category_code?: Category;
  preparation_time_in_minutes!: number;
  difficulty_level_1_5!: number;
  the_date_the_recipe_was_added_to_the_website?: Date;
  the_list_of_components?: string[];
  preparation?: string[];
  user_code_that_entered_the_recipe?: User;
  image?: string;
}

