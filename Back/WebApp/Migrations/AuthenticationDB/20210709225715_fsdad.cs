using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.AuthenticationDB
{
    public partial class fsdad : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "c5f095c3-ae10-434a-9024-3e743592ddb7", new DateTime(2021, 7, 10, 0, 57, 14, 736, DateTimeKind.Local).AddTicks(177), "df1824cf-da36-4420-a5c0-b3adca4e6d08" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "05bab0fe-cbf5-4818-93cd-2b52f6bee44a", new DateTime(2021, 7, 10, 0, 57, 14, 738, DateTimeKind.Local).AddTicks(5596), "7a60105e-048b-4ae4-80f8-c0e5d693969f" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "6389e308-5a9c-4517-9cea-7faaa3f94576", new DateTime(2021, 7, 10, 0, 28, 7, 659, DateTimeKind.Local).AddTicks(6761), "1b3a15ab-a47f-4b17-83be-e457264ad744" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "5e631a9d-394d-4776-82cd-055f40dc0006", new DateTime(2021, 7, 10, 0, 28, 7, 662, DateTimeKind.Local).AddTicks(2839), "b528c736-6cd9-41b5-adc7-450070ea1e43" });
        }
    }
}
