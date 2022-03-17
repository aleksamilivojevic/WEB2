using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
    public class CrewDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> List { get; set; }
    }
}
