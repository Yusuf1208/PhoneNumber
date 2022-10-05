using PhoneNumber.API.Models;
using Microsoft.EntityFrameworkCore;


namespace PhoneNumber.API.Data
{
    public class PhoneNumberDbContext : DbContext
    {
        public PhoneNumberDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Person> Persons { get; set; }
    }
}
