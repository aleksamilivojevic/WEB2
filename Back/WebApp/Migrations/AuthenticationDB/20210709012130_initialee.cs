using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.AuthenticationDB
{
    public partial class initialee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "CrewID", "DOB", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Role", "SecurityStamp", "StreetID", "TwoFactorEnabled", "UserName" },
                values: new object[] { "1", 0, "ca6f1945-3ed8-412a-afd8-e81087e4b57c", 1, new DateTime(2021, 7, 9, 3, 21, 29, 562, DateTimeKind.Local).AddTicks(8487), "bla", false, "Aleksa Milivojevic", false, null, null, null, "12345678", null, false, "admin", "78a3224e-277d-4df7-a6ed-8b511e3b9263", 1, false, "mili" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1");
        }
    }
}
