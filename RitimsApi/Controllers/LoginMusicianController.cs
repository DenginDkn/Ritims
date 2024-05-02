using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RitimsApi.DataContext;
using RitimsApi.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class LoginMusicianController : ControllerBase
{
    private readonly UserContext _context;

    public LoginMusicianController(UserContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] Musician musicianModel)
    {
        try
        {
            var musicianUser = await _context.Musicians
                .FirstOrDefaultAsync(m => m.Email == musicianModel.Email);

            if (musicianUser != null && musicianUser.Password == musicianModel.Password)
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
