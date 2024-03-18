using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
    
        public static List<Category> categories = new List<Category> { new Category {Id = 1, Name = "בשרי", Routing_to_icon = "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/05/20170831/Depositphotos_73556939_original-300x200.jpg" }, new Category { Id = 2, Name = "דגים", Routing_to_icon = "https://img.lovepik.com/png/20231120/colorful-fish-icon-on-white-background-vector-bluegill-ux_651215_wh860.png" }, new Category { Id = 3, Name = "ירקות", Routing_to_icon = "https://salsala.net/wp-content/uploads/2022/12/WhatsApp-Image-2018-11-08-at-13.10.31.jpeg" },
        new Category {Id = 4, Name = "פירות", Routing_to_icon = "https://fruitlab.co.il/wp-content/uploads/2023/08/%D7%9C%D7%95%D7%92%D7%95-%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%90%D7%91.jpg" }, new Category {Id = 5, Name = "עוגות", Routing_to_icon = "https://img.lovepik.com/element/40253/6034.png_1200.png" }, };
        [Route("listCategory")]
        [HttpGet]
        public List<Category> GetCategory()
        {
            return categories;
        }
    }
}
