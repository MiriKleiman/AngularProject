using Microsoft.AspNetCore.Mvc;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public static User user1 = new User { Id = 3, UserName = "tamar", Adress = "macabim", Email = "c@gmail.com", Password = "345" };
        public static Category category = new Category { Id = 2, Name = "דגים", Routing_to_icon = "https://img.lovepik.com/png/20231120/colorful-fish-icon-on-white-background-vector-bluegill-ux_651215_wh860.png" };
        public static Category category2 = new Category { Id = 1, Name = "בשרי", Routing_to_icon = "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/05/20170831/Depositphotos_73556939_original-300x200.jpg" };
        public static Category category3 = new Category { Id = 3, Name = "ירקות", Routing_to_icon = "https://salsala.net/wp-content/uploads/2022/12/WhatsApp-Image-2018-11-08-at-13.10.31.jpeg" };
        public static Category category4 = new Category { Id = 4, Name = "פירות", Routing_to_icon = "https://fruitlab.co.il/wp-content/uploads/2023/08/%D7%9C%D7%95%D7%92%D7%95-%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%90%D7%91.jpg" };
        public static Category category5 = new Category { Id = 5, Name = "עוגות", Routing_to_icon = "https://img.lovepik.com/element/40253/6034.png_1200.png" };
        public static List<string> recipe1 = new List<string>() { "בקע את השמרים במים חמים והמתין כ-5 דקות עד שיתקבלו פעילים", "בקע את הקמח בקערה גדולה. הוסף את השמרים המופקים, את הסוכר, את השמן ואת המלח טגן את המרכיבים הללו במיקסר במהירות נמוכה עד שיוצק כדור אחיד", "הכן פירוש ושים את הבצק בקערה כיסו אותו והשאירו להמתין 30 דקות", "חממו את התנור ל-200 מעלות צלזיוס", "צור את הבצק ללוחות או לכדורים ושים אותם על תבנית מרופדת בנייר אפייה השאירו להמתין כ-10 דקות",
        "אפו את הלחם בתנור החם במשך כ-25 דקות או עד שהלחם מתייצב ומשיג גוון זהוב","הוציאו את הלחם מהתנור והניחו להם להתקרר על משטח מתכת ספורס"};
        public static List<string> recipe = new List<string>() { "3 כוסות קמח מלא", "1 1/2 כוסות מים חמים", "2 כפות שמרים יבשים", "2 כפות סוכר", "2 כפות שמן זית", "1 1/2 כפית מלח", "קמח לפירוש" };

        public static List<Recipe> recipeList = new List<Recipe>{
            new Recipe{ Recipe_code = 1, Recipe_name = "כבד צלוי",Category_code= category2, Preparation_time_in_minutes = 30, Difficulty_level_1_5  = 4 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8346.jpg"},
            new Recipe{ Recipe_code = 2, Recipe_name = "דג מטוגן",Category_code= category, Preparation_time_in_minutes = 15, Difficulty_level_1_5  = 3 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8331.jpg"},
            new Recipe{ Recipe_code = 3, Recipe_name = "ירקות מאודים",Category_code= category3, Preparation_time_in_minutes = 40, Difficulty_level_1_5  = 3 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8348.JPG"},
            new Recipe{ Recipe_code = 4, Recipe_name = "סושי",Category_code= category3, Preparation_time_in_minutes = 130, Difficulty_level_1_5  = 2 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8329.jpg"},
            new Recipe{ Recipe_code = 5, Recipe_name = "חזה עוף",Category_code= category2, Preparation_time_in_minutes = 20, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8321.jpg"},
            new Recipe{ Recipe_code = 6, Recipe_name = "סטייק",Category_code= category2, Preparation_time_in_minutes = 25, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8343.JPG"},
            new Recipe{ Recipe_code = 7, Recipe_name = "המבורגר",Category_code= category2, Preparation_time_in_minutes = 85, Difficulty_level_1_5  = 5 ,The_date_the_recipe_was_added_to_the_website = DateTime.Now,The_list_of_components = recipe, Preparation = recipe1,User_code_that_entered_the_recipe=user1,Image="https://cdn.getmood.io/warehouse/dynamic/8328.jpg"}, };
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
