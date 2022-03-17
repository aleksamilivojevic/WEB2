using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
    public class CallDTO
    {
        public string Reason { get; set; }
        public string Comment { get; set; }
        public string Hazard { get; set; }
        public string Street { get; set; }
        public string UserId { get; set; }
    }
}
