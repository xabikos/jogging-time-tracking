using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using JoggingTimeTracker.Web.DataAccess;
using JoggingTimeTracker.Web.Extensions;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace JoggingTimeTracker.Web.Controllers
{
    //[Authorize]
    public class ReportController : ApiController
    {

        private readonly Func<DateTime, int> _weekProjector =
            d =>
                CultureInfo.CurrentCulture.Calendar.GetWeekOfYear(d, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);

        // GET api/joggingSessions/5
        public IEnumerable<object> Get()
        {
            var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
            var userId = User.Identity.GetUserId();
            var test = dbContext.JoggingSessions
                .Where(js=>js.UserId == userId)
                .OrderByDescending(js => js.Date)
                .ToList()
                .Select(js => new
                {
                    session = js,
                    week = _weekProjector(js.Date)
                })
                .GroupBy(x => x.week)
                .Select((g, i) => new
                {
                    Week =
                        g.First().session.Date.StartOfWeek(DayOfWeek.Monday).Date.ToShortDateString() + " - " +
                        g.First().session.Date.StartOfWeek(DayOfWeek.Monday).Date.AddDays(6).ToShortDateString(),
                    AverageDistance = g.Sum(t => t.session.Distance)/g.Count(),
                    AverageSpeed = Math.Round(g.Sum(t => t.session.GetSpeed())/g.Count(), 2)
                });
                
            return test;
        }
    }
}