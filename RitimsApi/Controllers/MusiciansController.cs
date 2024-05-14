// MusiciansController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RitimsApi.DataContext;
using RitimsApi.Models;

[Route("api/[controller]")]
[ApiController]
public class MusiciansController : ControllerBase
{
    private readonly UserContext _context;

    public MusiciansController(UserContext context)
    {
        _context = context;
    }

    // GET: api/Musicians
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Musician>>> GetMusicians()
    {
        return await _context.Musicians.ToListAsync();
    }

    // GET: api/Musicians/id
    [HttpGet("{id}")]
    public async Task<ActionResult<Musician>> GetMusician(int id)
    {
        var musician = await _context.Musicians.FindAsync(id);

        if (musician == null)
        {
            return NotFound();
        }

        return musician;
    }

    // POST: api/Musicians
    [HttpPost]
    public async Task<ActionResult<Musician>> PostMusician(Musician musician)
    {
        _context.Musicians.Add(musician);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetMusician", new { id = musician.Id }, musician);
    }
private bool MusicianExists(int id)
    {
        return _context.Musicians.Any(e => e.Id == id);
    }
        // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutMusicianUser(int id, Musician MusicianUser)
    {
        if (id != MusicianUser.Id)
        {
            return BadRequest();
        }

        _context.Entry(MusicianUser).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MusicianExists(id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMusicianUser(int id)
    {
        var MusicianUser = await _context.Users.FindAsync(id);
        if (MusicianUser == null)
        {
            return NotFound();
        }

        _context.Users.Remove(MusicianUser);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    

    [HttpGet("GetByEmail/{email}")]
    public async Task<ActionResult<Musician>> GetUserByEmail(string email)
    {
        var Musicianuser = await _context.Musicians.FirstOrDefaultAsync(m => m.Email == email);

        if (Musicianuser == null)
        {
            return NotFound();
        }

        return Musicianuser;
    }

     // PUT: api/Users/UpdateUserInfo
[HttpPut("UpdateMusicianInfo")]
public async Task<IActionResult> UpdateMusicianUserInfo(string email, string newName, string newCity)
{
    // Find the user by email
    var MusicianUser = await _context.Musicians.FirstOrDefaultAsync(m => m.Email == email);

    if (MusicianUser == null)
    {
        return NotFound("User not found");
    }

    // Update user's name and city
    MusicianUser.Name = newName;
    MusicianUser.City = newCity;

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
