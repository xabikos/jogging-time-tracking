using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using JoggingTimeTracker.Web.Entities;

namespace JoggingTimeTracker.Web.DataAccess.MapConfiguration
{
    /// <summary>
    /// Contains the database map configuration for <see cref="JoggingSession"/>
    /// </summary>
    public class JoggingSessionConfiguration : EntityTypeConfiguration<JoggingSession>
    {
        public JoggingSessionConfiguration()
        {
            ToTable("JoggingSessions");

            Property(js => js.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            HasRequired(js=>js.User).WithMany(u=>u.Sessions).HasForeignKey(js=>js.UserId).WillCascadeOnDelete(true);
        }
    }
}