using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class Handler : IRequestHandler<Query, List<Activity>> 
        {
            private readonly DataContext _context;
            private readonly ILogger<List> logger;
            public Handler(DataContext Context, ILogger<List> logger)
            {
            this.logger = logger;
                _context = Context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                try 
                {
                    for(var i = 0; 0<10;i++)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Delay(1000, cancellationToken);
                        this.logger.LogInformation($"task {i} has completed");
                    }
                    
                }
                catch(Exception ex)
                {
                    this.logger.LogInformation("Task was Cancelled");
                }
                return await _context.Activities.ToListAsync();
            }
        }
        
    }
}