using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.DTOs
{
    public class IncidentDataDTO
    {
        public string Type { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedCustomers { get; set; }
        public double Voltage { get; set; }
        public DateTime ScheduledTime { get; set; }
        public string Cause { get; set; }
        public string Subcause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
    }
}
