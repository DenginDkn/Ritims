using Microsoft.EntityFrameworkCore;
using RitimsApi.Models;

namespace RitimsApi.DataContext
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        public DbSet<users> Users { get; set; } = null!; 
        public DbSet<Musician> Musicians { get; set; } = null!; 
        public DbSet<Event> Events { get; set; } = null!;

        public DbSet<MessageDTO> Messages { get; set; } = null!;

       protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<MessageDTO>().HasKey(e => e.Id);
}


    }
}
