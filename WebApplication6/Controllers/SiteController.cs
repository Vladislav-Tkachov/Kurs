using Kurs.BL;
using Kurs.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication6.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class SiteController : ControllerBase
    {
        private readonly ILogger<SiteController> _logger;
        private readonly SiteService _siteService;

        public SiteController(ILogger<SiteController> logger, SiteService siteService)
        {
            _logger = logger;
            _siteService = siteService;
        }

        [HttpPost]
        public async Task<CardDTO> GetCard([FromBody] object id)
        {
            var state = JsonConvert.DeserializeObject<Guid>(id.ToString());
            var i = await _siteService.GetCard(state);
            return i;
        }

        [HttpPost]
        public async Task<List<CardDTO>> GetCards([FromBody] object type)
        {
            var state = JsonConvert.DeserializeObject<A>(type.ToString());
            var i = await _siteService.GetCards(state.type);
            return i;
        }
        public class A
        {
            public int type;
        }
    }
}
