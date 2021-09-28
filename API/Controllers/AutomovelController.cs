using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;
using System.Linq;
using API.Data;


namespace API.Controllers
{
    [ApiController]
    [Route("api/automovel")]
    public class AutomovelController : ControllerBase
    {
        private readonly DataContext _context;

        public AutomovelController(DataContext context)
        {
            _context = context;
            _context.SaveChanges();
        }

        //POST: api/automovel/create
        [HttpPost]
        [Route("create")]

        public IActionResult Create([FromBody] Automovel automovel){
            _context.Automoveis.Add(automovel);
            _context.SaveChanges();
            return Created("", automovel);
        }

        //GET: api/automovel/list
        [HttpGet]
        [Route("list")]

        public List<Automovel> List() =>  _context.Automoveis.ToList();    

    }
}
