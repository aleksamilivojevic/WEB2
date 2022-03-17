using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;
using WebApp.Models.NClasses;

namespace WebApp.Repository
{
    public class DataDBContext : DbContext
    {
        DataDBContext data;
        public DataDBContext(DbContextOptions<DataDBContext> options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Street>().HasData(
                new Street() { Id = 2, Name = "Pasterova", Priority = 7 },
                new Street() { Id = 1, Name = "Gagarinova", Priority = 8 }
            );
            modelBuilder.Entity<Device>().HasData(
                new Device() { Id = 3, Street=null, Name = "Bla", Type = "nesto", CoordX = 9.8, CoordY = 9.8 }
            );
            modelBuilder.Entity<Incident>().HasData(
                new Incident() { Id=1 , Type ="bla",Confirmed=true,Status="ok",ETA=DateTime.Now, ATA = DateTime.Now ,ETR = DateTime.Now ,AffectedCustomers=2,Voltage=220,ScheduledTime = DateTime.Now,Cause="bla",Subcause="bla",ConstructionType="bla",Material="bla"}
            );
            modelBuilder.Entity<Crew>().HasData(
                  new Crew() { Id = 3, Name = "Profesional" },
                  new Crew() { Id = 2 , Name ="Programeri"},
                  new Crew() { Id= 1,Name ="Drezga"}
                  );
           //   modelBuilder.Entity<IncidentDevice>().HasData(
             //     new IncidentDevice() { Id=1, Device = data.Devices.FirstOrDefault(x => x.Name == "Bla"), Incident=data.Incidents.FirstOrDefault(x => x.Id == 1)}
               //   );
              modelBuilder.Entity<Consumer>().HasData(
                  new Consumer() { Id =1, Name="Drezga", Phone="0600600606", Street=null, Surname="Dusanovac", Type="Commercial"}
                  );
              /*
              modelBuilder.Entity<SafetyDocDevice>().HasData(
                  new SafetyDocDevice() { Id=1, Device=data.Devices.FirstOrDefault(x => x.Name =="Bla"), SafetyDoc=data.SafetyDocs.FirstOrDefault(x => x.Id == 1)}
                  );
              modelBuilder.Entity<SafetyDoc>().HasData(
                  new SafetyDoc() { Id=1, UserID="1", DateCreated=DateTime.Now, Details="bla", GroundingRemoved=false, Notes="la", Type="Something", OperationsCompleted=true, Ready=true, TagsRemoved=true, Status="2"}
                  );*/

            //  modelBuilder.Entity<WorkOrder>().HasData(
            //     new WorkOrder() {  } );
            //  modelBuilder.Entity<WorkOrderDevice>().HasData(
            //    new WorkOrderDevice() { }
            //     );
            //  modelBuilder.Entity<WorkPlan>().HasData(
            //     new WorkPlan() { }
            //     );
            //   modelBuilder.Entity<WorkPlanDevice>().HasData(
            //      new WorkPlanDevice() {  }
            //       );
            base.OnModelCreating(modelBuilder);
        }


        public DbSet<Street> Streets { get; set; }
        public DbSet<Call> Calls { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<WorkOrder> WorkOrders { get; set; }
        public DbSet<WorkPlan> WorkPlans { get; set; }
        public DbSet<SafetyDoc> SafetyDocs { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Crew> Crews { get; set; }
        public DbSet<Consumer> Consumers { get; set; }
        public DbSet<HistoricChange> HistoricChanges { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<IncidentDevice> IncidentsDevices { get; set; }
        public DbSet<SafetyDocDevice> SafetyDocsDevices { get; set; }
        public DbSet<WorkOrderDevice> WorkOrdersDevices { get; set; }
        public DbSet<WorkPlanDevice> WorkPlansDevices { get; set; }
    }
}
