using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.AuthenticationDB
{
    public partial class uiyu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "DOB", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b2cf82b0-aaf5-4131-ba9a-ad58c130a39f", new DateTime(2021, 7, 10, 0, 59, 11, 297, DateTimeKind.Local).AddTicks(2838), "123456787654321", "f5996007-e610-499c-8bd7-dac631de3f71" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "ac21d17d-2c9d-4b37-b574-e99d7a99b25a", new DateTime(2021, 7, 10, 0, 59, 11, 300, DateTimeKind.Local).AddTicks(6799), "8f0c6666-c14b-4737-b448-693f57ccedcf" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "DOB", "PasswordHash", "SecurityStamp" },
                values: new object[] { "c5f095c3-ae10-434a-9024-3e743592ddb7", new DateTime(2021, 7, 10, 0, 57, 14, 736, DateTimeKind.Local).AddTicks(177), "12345678987654321", "df1824cf-da36-4420-a5c0-b3adca4e6d08" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "DOB", "SecurityStamp" },
                values: new object[] { "05bab0fe-cbf5-4818-93cd-2b52f6bee44a", new DateTime(2021, 7, 10, 0, 57, 14, 738, DateTimeKind.Local).AddTicks(5596), "7a60105e-048b-4ae4-80f8-c0e5d693969f" });
        }
    }
}
