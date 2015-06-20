using System;
using JoggingTimeTracker.Web.Entities;

namespace JoggingTimeTracker.Web.Extensions
{
    /// <summary>
    /// Contains extension methods for <see cref="JoggingSession"/>
    /// </summary>
    public static class JoggingSessionExtensions
    {
        /// <summary>
        /// Gets the speed in km/h
        /// </summary>
        public static float GetSpeed(this JoggingSession session)
        {
            return session.TimeInTicks != 0 ? (session.Distance/1000)/((float) session.TimeInTicks/36000000000) : 0;
        }

    }
}