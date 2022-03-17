using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class DevicesController : ControllerBase
    {
        private readonly DataDBContext data;
        private readonly AuthenticationDBContext auth;
        private UserManager<User> manager;
        public DevicesController(UserManager<User> u, DataDBContext d, AuthenticationDBContext a)
        {
            data = d;
            auth = a;
            manager = u;
        }

        // GET: api/<DevicesController>
        [HttpGet]
        public ICollection<DeviceDTO> Get()
        {
            List<DeviceDTO> list = new List<DeviceDTO>();
            foreach (Device d in data.Devices)
            {
                list.Add(new DeviceDTO() { Name = d.Name, Street = d.Street.Name, Type = d.Type });
            }
            return list;
        }

        [HttpGet("{type}")]
        public IActionResult Get(string type)
        {

            Device temp = data.Devices.OrderByDescending(u => u.Id).FirstOrDefault(x => x.Type == type);
            int id = 1;
            if (temp != null)
            {
                string y = temp.Name.Substring(3, 1);
                id = Int32.Parse(y) + 1;
            }
            string retval = (type.Substring(0, 3)).ToUpper() + id.ToString();
            return Ok(new { newId = retval });
        }

        [HttpGet]
        [Route("GetDeviceByName/{name}")]
        public IActionResult GetDeviceByName(string name)
        {
            Device temp = data.Devices.FirstOrDefault(x => x.Name == name);
            if (temp != null)
            {
                return Ok(new { retval = new DeviceDTO() { Name = temp.Name, Street = temp.Street.Name, Type = temp.Type } });
            }
            else
            {
                return BadRequest();
            }
        }

        // GET api/<DevicesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DevicesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DeviceDTO body)
        {
            Device temp = new Device()
            {
                Name = body.Name,
                Street = data.Streets.FirstOrDefault(x => x.Name == body.Street),
                Type = body.Type,
            };
            data.Devices.Add(temp);
            await data.SaveChangesAsync();
            return Ok();
        }

        // PUT api/<DevicesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DevicesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
