using Microsoft.AspNetCore.Mvc;

namespace MyNotes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Create()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return View();
        }
    }
}
