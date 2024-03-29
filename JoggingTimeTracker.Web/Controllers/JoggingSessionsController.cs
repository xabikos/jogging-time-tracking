﻿using System;
using System.Linq;
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
        public IQueryable<JoggingSession> Get()
        {
            var userId = User.Identity.GetUserId();
            var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
            return dbContext.JoggingSessions.Where(js=>js.UserId == userId).OrderByDescending(js=>js.Date);
        }

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

        // PUT: api/joggingSessions
        [ResponseType(typeof(JoggingSession))]
        public async Task<IHttpActionResult> Put(JoggingSession session)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (session.Id == default(int))
            {
                return BadRequest();
            }

            try
            {
                var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
                var sessionToUpdate = await dbContext.JoggingSessions.FindAsync(session.Id);
                sessionToUpdate.Date = session.Date;
                sessionToUpdate.Distance = session.Distance;
                sessionToUpdate.TimeInTicks = session.TimeInTicks;
                await dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(session);
        }

        // DELETE api/joggingSessions/5
        [ResponseType(typeof(JoggingSession))]
        public async Task<IHttpActionResult> Delete(int id)
        {
            if (id == default(int))
            {
                return BadRequest("You should provide a valid value for the Id");
            }
            var dbContext = Request.GetOwinContext().Get<ApplicationDbContext>();
            var joggingSessionToDelete = await dbContext.JoggingSessions.FindAsync(id);
            if (joggingSessionToDelete==null)
            {
                return NotFound();
            }
            dbContext.JoggingSessions.Remove(joggingSessionToDelete);
            await dbContext.SaveChangesAsync();
            return Ok(joggingSessionToDelete);
        }

    }
}