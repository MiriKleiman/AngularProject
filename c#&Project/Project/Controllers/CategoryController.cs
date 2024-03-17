using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
    
        public static List<Category> categories = new List<Category> { new Category {Id = 1, Name = "a", Routing_to_icon = "https://publicdomainvectors.org/tn_img/tea-with-lemon-publicdomain.webp" }, new Category { Id = 2, Name = "b", Routing_to_icon = "https://publicdomainvectors.org/tn_img/spotted-cow-publicdomain.webp" }, new Category { Id = 3, Name = "c", Routing_to_icon = "https://publicdomainvectors.org/tn_img/wine-bottle-grapes-publicdomain.webp" } };
        [Route("listCategory")]
        [HttpGet]
        public List<Category> GetCategory()
        {
            return categories;
        }
    }
}
