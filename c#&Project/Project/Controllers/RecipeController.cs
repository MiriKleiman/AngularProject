using Microsoft.AspNetCore.Mvc;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public static User user = new User { Id = 1, UserName = "tamar", Adress = "macabim", Email = "c@gmail.com", Password = "345" };
        public static Category category = new Category { Id = 1, Name = "chaya", Routing_to_icon = "https://publicdomainvectors.org/tn_img/wine-bottle-grapes-publicdomain.webp" };
        public static Category category2 = new Category { Id = 1, Name = "yaffa", Routing_to_icon = "https://publicdomainvectors.org/tn_img/spotted-cow-publicdomain.webp" };
        public static Category category3 = new Category { Id = 1, Name = "rochy", Routing_to_icon = "https://publicdomainvectors.org/tn_img/tea-with-lemon-publicdomain.webp" };
        public static Category category4 = new Category { Id = 1, Name = "rochy", Routing_to_icon = "https://greissdesign.com/wp-content/uploads/2016/03/Food_Sandwich-Food-S.jpg" };
        public static Category category5 = new Category { Id = 1, Name = "rochy", Routing_to_icon = "https://greissdesign.com/wp-content/uploads/2019/07/food1-Freebies-S.jpg" };
        public static List<string> recipe1 = new List<string>() { "h", "j" };

        public static List<Recipe> recipeList = new List<Recipe>{
            new Recipe{ Recipe_code = 1, Recipe_name = "rachel",Category_code= category, Preparation_time_in_minutes = 7, Difficulty_level_1_5  = 4 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4gv_q9odPssJfOoofC1yScbenO6-bE7bRfRtDgUnTi_Dvv494gL8AFxPzkAwVXunu4x6wqmhHQbjFx4LaVPZyksFazPg9Y9Dc67BHy-RwcXVw9RxwWy6uS4-qe8uhkcd00Ny58_OgbQ&usqp=CAc"},
            new Recipe{ Recipe_code = 2, Recipe_name = "rachel",Category_code= category2, Preparation_time_in_minutes = 3, Difficulty_level_1_5  = 3 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCwN-0SgefAJ5LMXZIDy6lwHrSWxuxQOEmImb7rDqygx_LGMGUcAOxbitHnT8odI_9b0Sd45CdZLkuhhHBUi_QyVBy-wQHLfKdrNXhilFoyppqBk2EP3H4Cxoe2R6ym6b3f5sQH2BP9w&usqp=CAc"},
            new Recipe{ Recipe_code = 3, Recipe_name = "rachel",Category_code= category3, Preparation_time_in_minutes = 4, Difficulty_level_1_5  = 3 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqHXNrx1Y5DINGA_KCNM6ycylnu-PuQLsTyllYnVz2fciruSH9Xk3NpZVIb-PbYYcqgFp8PCQ-kjlF7i4v2MCjS-jDxb5jGQqLtTgO0aYyrCj2mFLIegL5KiOfgvIkT8IRJVmVueCGlQ&usqp=CAc"},
            new Recipe{ Recipe_code = 4, Recipe_name = "rachel",Category_code= category2, Preparation_time_in_minutes = 160, Difficulty_level_1_5  = 2 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQZ4_4gVQRrGhCzLR-ujGOHQbvHmJtnOSmg0AU5JgaSPTzCvx0t89VW_0FXWBjPGfqddhLYCMPFIhXi3GiBhQZavjqZXmD0MgKW_9wy9vxRkt_GbqXAY0a5LDFJqL_Kkg5msZOH5rmpySP&usqp=CAc"},
            new Recipe{ Recipe_code = 5, Recipe_name = "rachel",Category_code= category, Preparation_time_in_minutes = 85, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSITyyG_Dpc0nVdOav4yrBtyHPGg44T3GyTNf6bhLc3yYi9LugX-rqAQpRTUcnHEzxYcHpW9lwppIFMRshx7NiNdWoMaHJBUZwDEXURMfH8ac87OFuXZYcwDwcUlYHAM29byVCX58WIWA&usqp=CAc"},
            new Recipe{ Recipe_code = 6, Recipe_name = "rachel",Category_code= category4, Preparation_time_in_minutes = 85, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSITyyG_Dpc0nVdOav4yrBtyHPGg44T3GyTNf6bhLc3yYi9LugX-rqAQpRTUcnHEzxYcHpW9lwppIFMRshx7NiNdWoMaHJBUZwDEXURMfH8ac87OFuXZYcwDwcUlYHAM29byVCX58WIWA&usqp=CAc"},
            new Recipe{ Recipe_code = 7, Recipe_name = "rachel",Category_code= category5, Preparation_time_in_minutes = 85, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe1, Preparation = recipe1,User_code_that_entered_the_recipe=user,Image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSITyyG_Dpc0nVdOav4yrBtyHPGg44T3GyTNf6bhLc3yYi9LugX-rqAQpRTUcnHEzxYcHpW9lwppIFMRshx7NiNdWoMaHJBUZwDEXURMfH8ac87OFuXZYcwDwcUlYHAM29byVCX58WIWA&usqp=CAc"}, };
        //static int num = 8;
        [Route("addRecipe")]
        [HttpPost]
        public IActionResult PostUserList([FromBody] Recipe recipe)
        {

            //if (productList.Where(x => x.Id == product.Id && x.Name == product.Name).ToList()!=null)
            try
            {
                //recipe.Recipe_code = num;
                //num += 1;
                recipeList.Add(recipe);
                return Ok(true);
            }
            catch (Exception)
            {
                return NotFound();
            }

            // throw new Exception("somthing worng");
        }
        [Route("GetRecipeList")]
        [HttpGet]
        public List<Recipe> GetRecipeList()
        {
            try
            {
                return recipeList;
            }
            catch (Exception)
            {
                throw new Exception("somthing worng");
            }

        }
        //[Route("RecipeDetailssss")]
        [HttpGet("{id}")]
        public Recipe RecipeDetails([FromRoute] int id)
        {
            try
            {
                Recipe recipe = recipeList.Where(x => x.Recipe_code == id).First();
                return recipe;
            }
            catch (Exception)
            {
                throw;
            }

        }
        //[FromBody] User product
        //[Route("GetUserListById")]
        //[HttpGet("{id}")]
        //public Recipe GetUserListById([FromRoute] int id)
        //{
        //    Recipe recipe = recipeList[id - 1];
        //    return recipe;
        //}

        [HttpDelete("{id}")]
        public IActionResult DeleteUserListById([FromRoute] int id)
        {
            try
            {
                //recipeList[id - 1] = null;
                recipeList.Remove(recipeList[id - 1]);
                for (int i = id; i < recipeList.Count; i++)
                {
                    recipeList[i].Recipe_code = recipeList[i - 1].Recipe_code;
                }
                return Ok(true);
            }
            catch {
            return NotFound();
            }


        }

        [HttpPut]
        public void PutUserList([FromBody] Recipe recipe)
        {
            recipeList[recipe.Recipe_code - 1] = recipe;

        }


    }
}
