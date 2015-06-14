using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using JoggingTimeTracker.Web.DataAccess;
using JoggingTimeTracker.Web.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace JoggingTimeTracker.Web.Controllers
{
    [Authorize]
    public class JoggingSessionsController : ApiController
    {
        // GET api/joggingSessions/5
        [ResponseType(typeof(JoggingSession))]
        public async Task<IHttpActionResult> Get(int id)
        {
            var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
            var session = await dbContext.JoggingSessions.FindAsync(id);
            if (session == null)
            {
                return NotFound();
            }
            return Ok(session);
        }

        // POST api/joggingSessions
        public async Task<IHttpActionResult> Post(JoggingSession session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
                session.UserId = User.Identity.GetUserId();
                dbContext.JoggingSessions.Add(session);
                await dbContext.SaveChangesAsync();

                return CreatedAtRoute("DefaultApi", new { id = session.Id }, session);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

    }
}