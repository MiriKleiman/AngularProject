using Microsoft.AspNetCore.Mvc;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> userList = new List<User>{
            new User{  Id = 1,  UserName = "rachel", Adress = "tmarim", Email = "r@gmail.com" ,Password = "123"},
            new User{  Id = 2, UserName = "chani", Adress = "narkis", Email = "c@gmail.com" ,Password = "234" },
            new User{  Id = 3, UserName = "tamar", Adress = "gefen", Email = "t@gmail.com" ,Password = "345" },};

        //[HttpPost]
        //public void PostUserList([FromBody] User user)
        //{
        //    //if (productList.Where(x => x.Id == product.Id && x.Name == product.Name).ToList()!=null)
        //    userList.Add(user);
        //    throw new Exception("somthing worng");
        //}

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            try
            {
                var fountUser = userList.FirstOrDefault(x => x.UserName == user.UserName);
                if (fountUser != null)
                {
                    if (fountUser.Password == user.Password)
                        return Ok(fountUser);
                    else
                        return Ok(null);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "bug in the server");
            }
            //if (userList.Where(x => x.UserName == user.UserName && x.Password == user.Password).FirstOrDefault() != null)
            //    return true;


            //throw new Exception("the user not found");

            // return false;
        }
         //static int num = 4;
        [Route("register")]
        [HttpPost]
        public IActionResult Register([FromBody] User user)
        {
            try
            {
                var fountUser = userList.Where(x => x.UserName == user.UserName && x.Password == user.Password).FirstOrDefault();
                if (fountUser != null)
                {
                    return NotFound();
                }
                //user.Id = num;
                userList.Add(user);
                //num++;
                return Ok(true);
                //return NotFound("enter register");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "bug in the server");
            }
        }

        [HttpGet]
        public IEnumerable<User> GetUserList()
        {
            return userList;
        }

        [HttpGet("{id}")]
        public User GetUserListById([FromRoute] int id)
        {
            User user = userList[id - 1];
            return user;
        }

    }
}

