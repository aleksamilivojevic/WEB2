using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class Drezga : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Crews",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Profesional" });

            migrationBuilder.UpdateData(
                table: "Incidents",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ATA", "ETA", "ETR", "ScheduledTime" },
                values: new object[] { new DateTime(2021, 7, 11, 16, 22, 2, 445, DateTimeKind.Local).AddTicks(9991), new DateTime(2021, 7, 11, 16, 22, 2, 443, DateTimeKind.Local).AddTicks(5200), new DateTime(2021, 7, 11, 16, 22, 2, 446, DateTimeKind.Local).AddTicks(643), new DateTime(2021, 7, 11, 16, 22, 2, 446, DateTimeKind.Local).AddTicks(3170) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Crews",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "Incidents",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ATA", "ETA", "ETR", "ScheduledTime" },
                values: new object[] { new DateTime(2021, 7, 11, 1, 57, 44, 776, DateTimeKind.Local).AddTicks(7739), new DateTime(2021, 7, 11, 1, 57, 44, 774, DateTimeKind.Local).AddTicks(1428), new DateTime(2021, 7, 11, 1, 57, 44, 776, DateTimeKind.Local).AddTicks(8451), new DateTime(2021, 7, 11, 1, 57, 44, 777, DateTimeKind.Local).AddTicks(188) });
        }
    }
}
