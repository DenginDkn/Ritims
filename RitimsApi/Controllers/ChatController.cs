using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RitimsApi.DataContext;
using RitimsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PusherServer;

namespace RitimsApi.Controllers
{
    [Route("api/chat")] // Route prefix changed to match the controller name
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly UserContext _context;

        public ChatController(UserContext context)
        {
            _context = context;
        }

        [HttpPost("messages")]
        public async Task<ActionResult> SendMessage(MessageDTO dto)
        {
            try
            {
                _context.Messages.Add(dto);
                await _context.SaveChangesAsync();

                var options = new PusherOptions
                {
                    Cluster = "eu",
                    Encrypted = true
                };
                var pusher = new Pusher("1808648", "73b91722453e60e5e5d3", "8907aaea69b62d920755", options);
                await pusher.TriggerAsync("chat", "message", new { username = dto.Username, message = dto.Message, timestamp = dto.TimeStamp });

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpGet("messages")]
        public async Task<ActionResult<IEnumerable<MessageDTO>>> GetMessages()
        {
            try
            {
                var messages = await _context.Messages.ToListAsync();
                return Ok(messages);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
