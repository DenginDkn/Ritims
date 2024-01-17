using System;

namespace RitimsApi.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string? City { get; set; }
        public string? Place { get; set; }
        public decimal Price { get; set; }
    }
}
