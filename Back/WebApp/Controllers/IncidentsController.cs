using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Models.NClasses;
using WebApp.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class IncidentsController : ControllerBase
    {
        private readonly DataDBContext data;
        private readonly AuthenticationDBContext auth;
        private UserManager<User> manager;
        public IncidentsController(UserManager<User> u, DataDBContext d, AuthenticationDBContext a)
        {
            data = d;
            auth = a;
            manager = u;
        }

        // GET: api/<IncidentsController>
        [HttpGet]
        public IActionResult Get()
        {
            List<IncidentDataDTO> list = new List<IncidentDataDTO>();
            foreach (Incident x in data.Incidents)
            {
                list.Add(new IncidentDataDTO()
                {
                    AffectedCustomers = x.AffectedCustomers,
                    ATA = x.ATA,
                    ETA = x.ETA,
                    ETR = x.ETR,
                    ScheduledTime = x.ScheduledTime,
                    Cause = x.Cause,
                    Status = x.Status,
                    Confirmed = x.Confirmed,
                    ConstructionType = x.ConstructionType,
                    Material = x.Material,
                    Voltage = x.Voltage,
                    Type = x.Type,
                    Subcause = x.Subcause,
                });
            }
            return Ok(new { list });
        }

        // GET api/<IncidentsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (await auth.Users.FirstOrDefaultAsync(x => x.Id == User.Claims.First(x => x.Type == "UserID").Value) != null)
            {
                Incident temp = await data.Incidents.FirstOrDefaultAsync(x => x.Id == id);
                if (temp == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(temp);
                }
            }
            else
            {
                return Unauthorized();
            }
        }

        // POST api/<IncidentsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] IncidentDTO body)
        {
            string id = User.Claims.First(x => x.Type == "UserID").Value;
            string role = auth.Users.FirstOrDefault(x => x.Id == id).Role;
            if (role == "Dispatcher")
            {
                Incident temp = new Incident()
                {
                    AffectedCustomers = body.Incident.AffectedCustomers,
                    ATA = body.Incident.ATA,
                    ETA = body.Incident.ETA,
                    ETR = body.Incident.ETR,
                    ScheduledTime = body.Incident.ScheduledTime,
                    Cause = body.Incident.Cause,
                    Status = body.Incident.Status,
                    Confirmed = body.Incident.Confirmed,
                    ConstructionType = body.Incident.ConstructionType,
                    Material = body.Incident.Material,
                    Voltage = body.Incident.Voltage,
                    Type = body.Incident.Type,
                    Subcause = body.Incident.Subcause,
                    Crew = data.Crews.FirstOrDefault(x => x.Id == body.Crew)
                };
                foreach (DeviceDTO d in body.Devices)
                {
                    await data.IncidentsDevices.AddAsync(new IncidentDevice() { Incident = temp, Device = data.Devices.FirstOrDefault(x => x.Name == d.Name) });
                }
                await data.Incidents.AddAsync(temp);
                await data.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }

        // PUT api/<IncidentsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<IncidentsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
