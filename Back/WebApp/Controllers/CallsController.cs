using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CallsController : ControllerBase
    {
        private readonly DataDBContext data;
        private readonly AuthenticationDBContext auth;
        private UserManager<User> _userManager;
        private ApplicationSettings _appSettings;

        public CallsController(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, DataDBContext d, AuthenticationDBContext a)
        {
            _userManager = userManager;
            _appSettings = appSettings.Value;
            data = d;
            auth = a;
        }

        // GET: api/<CallsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CallsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("GetCallsForDevices")]
        public IActionResult GetCallsForDevices(DeviceDTO[] body)
        {
            List<CallDTO> ret = new List<CallDTO>();
            List<string> adrs = new List<string>();
            foreach (DeviceDTO d in body)
            {
                if (!adrs.Contains(d.Street))
                {
                    adrs.Add(d.Street);
                }
            }
            foreach (Call c in data.Calls)
            {
                if (adrs.Contains(c.Street.Name))
                {
                    User temp = auth.Users.FirstOrDefault(x => x.Id == c.UserID);
                    string username = "Anonymous User";
                    if (temp != null)
                    {
                        username = temp.FullName;
                    }
                    ret.Add(new CallDTO() { UserId = username, Comment = c.Comment, Hazard = c.Hazard, Reason = c.Reason, Street = c.Street.Name });
                }
            }
            return Ok(new { retval = ret });
        }

        // POST api/<CallsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CallDTO body)
        {
            Call temp = new Call();
            if (User.Identity.IsAuthenticated)
            {
                temp.UserID = User.Claims.First(x => x.Type == "UserID").Value;
            }
            else
            {
                temp.UserID = "-1";
            }
            temp.Street = data.Streets.FirstOrDefault(x => x.Name == body.Street);
            temp.Reason = body.Reason;
            temp.Hazard = body.Hazard;
            temp.Comment = body.Comment;
            data.Calls.Add(temp);
            
            await data.SaveChangesAsync();
            return Ok();
        }

        // PUT api/<CallsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CallsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
