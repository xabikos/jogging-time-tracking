using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JoggingTimeTracker.Web.DataAccess;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace JoggingTimeTracker.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            if (User.Identity.IsAuthenticated)
            {
                var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
                var userId = User.Identity.GetUserId();
                ViewBag.JoggingSessions = dbContext.JoggingSessions.Where(js => js.UserId == userId).ToList();
            }
            return View();
        }
    }
}
