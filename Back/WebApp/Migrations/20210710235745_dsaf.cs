using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class dsaf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Incidents",
                columns: new[] { "Id", "ATA", "AffectedCustomers", "Cause", "Confirmed", "ConstructionType", "CrewId", "ETA", "ETR", "Material", "ScheduledTime", "Status", "Subcause", "Type", "Voltage" },
                values: new object[] { 1, new DateTime(2021, 7, 11, 1, 57, 44, 776, DateTimeKind.Local).AddTicks(7739), 2, "bla", true, "bla", null, new DateTime(2021, 7, 11, 1, 57, 44, 774, DateTimeKind.Local).AddTicks(1428), new DateTime(2021, 7, 11, 1, 57, 44, 776, DateTimeKind.Local).AddTicks(8451), "bla", new DateTime(2021, 7, 11, 1, 57, 44, 777, DateTimeKind.Local).AddTicks(188), "ok", "bla", "bla", 220.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Incidents",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
