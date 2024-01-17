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
}
