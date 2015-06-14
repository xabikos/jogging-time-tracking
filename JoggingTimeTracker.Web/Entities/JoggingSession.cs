using System;

namespace JoggingTimeTracker.Web.Entities
{
    /// <summary>
    /// Represents a jogging session
    /// </summary>
    public class JoggingSession
    {
        /// <summary>
        /// The id of the Entity
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// The date the activity tool place
        /// </summary>
        public DateTime Date { get; set; }
        
        /// <summary>
        /// The covered distance
        /// </summary>
        public float Distance { get; set; }
        
        /// <summary>
        /// The time the user was jogging
        /// </summary>
        public TimeSpan Time { get; set; }

        /// <summary>
        /// This is the property that actually stored in the database
        /// </summary>
        public long TimeInTicks
        {
            get { return Time.Ticks; }
            set { Time = new TimeSpan(value);}
        }

        /// <summary>
        /// The id of the user the session belongs to
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// The user the session belongs to
        /// </summary>
        public ApplicationUser User { get; set; }

    }
}