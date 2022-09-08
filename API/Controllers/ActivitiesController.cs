using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Domain;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        
 
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await this.Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityAsync(Guid id)
        {
            return await this.Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost] 
        public async Task<IActionResult> CreateAsync(Activity activity)
        {
            return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
        }
    }
}