using Microsoft.AspNetCore.Mvc;
using RitimsApi.DataContext;
using RitimsApi.Models;

[Route("api/[controller]")]
[ApiController]
public class SignupController : ControllerBase
{
    private readonly UserContext _context;

    public SignupController(UserContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Signup([FromBody] users user)
    {
        try
        {
            if (user == null)
            {
                return BadRequest(new { Message = "Invalid user data" });
            }

            if (string.IsNullOrWhiteSpace(user.Name) || string.IsNullOrWhiteSpace(user.Password))
            {
                return BadRequest(new { Message = "Username and Password are required fields" });
            }
            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new { Message = "Signup successful" });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = $"Error: {ex.Message}" });
        }
    }
}
