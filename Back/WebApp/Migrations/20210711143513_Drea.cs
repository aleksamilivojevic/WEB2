using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class Drea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Consumers",
                columns: new[] { "Id", "Name", "Phone", "StreetId", "Surname", "Type" },
                values: new object[] { 1, "Drezga", "0600600606", null, "Dusanovac", "Commercial" });

            migrationBuilder.InsertData(
                table: "Crews",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 2, "Programeri" },
                    { 1, "Drezga" }
                });

            migrationBuilder.UpdateData(
                table: "Incidents",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ATA", "ETA", "ETR", "ScheduledTime" },
                values: new object[] { new DateTime(2021, 7, 11, 16, 35, 12, 530, DateTimeKind.Local).AddTicks(1495), new DateTime(2021, 7, 11, 16, 35, 12, 527, DateTimeKind.Local).AddTicks(4015), new DateTime(2021, 7, 11, 16, 35, 12, 530, DateTimeKind.Local).AddTicks(2175), new DateTime(2021, 7, 11, 16, 35, 12, 530, DateTimeKind.Local).AddTicks(3869) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Consumers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Crews",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Crews",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "Incidents",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ATA", "ETA", "ETR", "ScheduledTime" },
                values: new object[] { new DateTime(2021, 7, 11, 16, 22, 2, 445, DateTimeKind.Local).AddTicks(9991), new DateTime(2021, 7, 11, 16, 22, 2, 443, DateTimeKind.Local).AddTicks(5200), new DateTime(2021, 7, 11, 16, 22, 2, 446, DateTimeKind.Local).AddTicks(643), new DateTime(2021, 7, 11, 16, 22, 2, 446, DateTimeKind.Local).AddTicks(3170) });
        }
    }
}
