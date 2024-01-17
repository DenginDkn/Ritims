using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RitimsApi.Models
{
    public class users
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? City { get; set; }
        public bool IsMusician { get; set; }
    }
}
