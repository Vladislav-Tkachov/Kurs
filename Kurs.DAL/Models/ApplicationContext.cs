using Microsoft.EntityFrameworkCore;

namespace Kurs.DAL
{
    public class ApplicationContext: DbContext
    {
        public DbSet<Card> Card { get; set; }
        public DbSet<Image> Image { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public ApplicationContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=kursdb;Trusted_Connection=True;");
        }
    }
}
