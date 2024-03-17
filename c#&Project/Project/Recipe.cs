using System.Collections.Generic;

namespace Project
{
    public class Recipe
    {
        //public int Recipe_code { get; set; }
        //public string Recipe_name { get; set; }
        //public Category Category_code { get; set; }
        //public double? Preparation_time_in_minutes { get; set; }
        //public int Difficulty_level_1_5 { get; set; }
        //public DateTime? The_date_the_recipe_was_added_to_the_website { get; set; }
        //public List<string> The_list_of_components { get; set; }
        //public List<string> Preparation { get; set; }
        //public User? User_code_that_entered_the_recipe { get; set; }
        //public string image { get; set; }


        //public int Recipe_code { get; set; }
        //public string Recipe_name { get; set; }
        //public Category Category_code { get; set; }
        //public double? Preparation_time_in_minutes { get; set; }
        //public int Difficulty_level_1_5 { get; set; }
        //public DateTime? The_date_the_recipe_was_added_to_the_website { get; set; }
        //public List<string>? The_list_of_components { get; set; }
        //public List<string>? Preparation { get; set; }
        //public User? User_code_that_entered_the_recipe { get; set; }
        //public string image { get; set; }

        public int Recipe_code { get; set; }
        public string? Recipe_name { get; set; }
        public Category? Category_code { get; set; }
        public int Preparation_time_in_minutes { get; set; }
        public int Difficulty_level_1_5 { get; set; }
        public DateTime? The_date_the_recipe_was_added_to_the_website { get; set; }
        public List<string>? The_list_of_components { get; set; }
        public List<string>? Preparation { get; set; }
        public User? User_code_that_entered_the_recipe { get; set; }
        public string? Image { get; set; }
    }
}
