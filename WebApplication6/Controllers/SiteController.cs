using Kurs.BL;
using Kurs.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication6.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SiteController : ControllerBase
    {
        private readonly ILogger<SiteController> _logger;
        private readonly SiteService _siteService;

        public SiteController(ILogger<SiteController> logger, SiteService siteService)
        {
            _logger = logger;
            _siteService = siteService;
        }

        [HttpGet]
        [Route("SIte/GetCard/{id?}")]
        public async Task<CardDTO> GetCard(Guid id)
        {
            var i = await _siteService.GetCard(id);
            return i;
        }

        [HttpPost]
        public async Task<List<CardDTO>> GetCards(int type)
        {
            var i = await _siteService.GetCards(type);
            return i;
        }

    }
}
