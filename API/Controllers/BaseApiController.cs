using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
       // z => x ??= y , means that whenever x is null use y as the default value.
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
    }
}