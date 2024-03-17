namespace Project.Controllers
{
    public interface IActionResult<T>
    {
        T Result { get; set; }

    }
}