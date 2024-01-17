using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RitimsApi.DataContext;
using RitimsApi.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly UserContext _context;

    public LoginController(UserContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] users model)
    {
        try
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user != null && user.Password == model.Password)
            {
                return Ok(new { Message = "Login successful" });
            }

            return Unauthorized(new { Message = "Invalid username or password" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { Message = "An error occurred while processing your request", Error = ex.Message });
        }
    }
}
