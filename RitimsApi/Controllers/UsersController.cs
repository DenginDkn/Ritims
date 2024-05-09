using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RitimsApi.DataContext;
using RitimsApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserContext _context; 

    public UsersController(UserContext context)
    {
        _context = context;
    }

    // GET: api/Users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<users>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<users>> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<users>> PostUser(users user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }

    // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, users user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }

        _context.Entry(user).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UserExists(int id)
    {
        return _context.Users.Any(e => e.Id == id);
    }
    // GET: api/Users/GetByEmail/{email}
    [HttpGet("GetByEmail/{email}")]
    public async Task<ActionResult<users>> GetUserByEmail(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    // PUT: api/Users/UpdateUserInfo
[HttpPut("UpdateUserInfo")]
public async Task<IActionResult> UpdateUserInfo(string email, string newName, string newCity)
{
    // Find the user by email
    var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

    if (user == null)
    {
        return NotFound("User not found");
    }

    // Update user's name and city
    user.Name = newName;
    user.City = newCity;

    try
    {
        // Save changes to the database
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        // Handle concurrency exceptions if any
        return StatusCode(500, "An error occurred while updating user information.");
    }

    return NoContent();
}
}
