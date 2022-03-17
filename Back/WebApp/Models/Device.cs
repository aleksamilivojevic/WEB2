using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models.NClasses;

namespace WebApp.Models
{
    public class Device
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public virtual Street Street { get; set; }
        public double CoordX { get; set; }
        public double CoordY { get; set; }
        public virtual ICollection<IncidentDevice> Incidents { get; set; }
        public virtual ICollection<WorkOrderDevice> WorkOrders { get; set; }
        public virtual ICollection<WorkPlanDevice> WorkPlans { get; set; }
        public virtual ICollection<SafetyDocDevice> SafetyDocs { get; set; }
        public virtual ICollection<Instruction> Instructions { get; set; }
    }
}
