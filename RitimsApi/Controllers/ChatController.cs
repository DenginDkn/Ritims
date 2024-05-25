using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PusherServer;
using RitimsApi.Models;

namespace RitimsApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class ChatController : Controller
    {
         [HttpPost("messages")]
        public async Task<ActionResult> Message(MessageDTO dto)
        {
            var options = new PusherOptions
    {
      Cluster = "eu",
      Encrypted = true
    };

    var pusher = new Pusher(
      "1808648",
      "73b91722453e60e5e5d3",
      "8907aaea69b62d920755",
      options);

    var result = await pusher.TriggerAsync(
      "chat",
      "message",
      data:new
      {
        username=dto.Username,
        message=dto.Message
      });

      return Ok(new String[]{});
    }
    }
}