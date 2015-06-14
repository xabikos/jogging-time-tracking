using System.Data.Entity;
using JoggingTimeTracker.Web.Entities;
using Microsoft.AspNet.Identity.EntityFramework;

namespace JoggingTimeTracker.Web.DataAccess
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.AddFromAssembly(typeof (ApplicationDbContext).Assembly);
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}