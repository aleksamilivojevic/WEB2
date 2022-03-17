using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.AuthenticationDB
{
    public partial class safa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CrewID", "DOB", "PasswordHash", "Role", "SecurityStamp", "StreetID" },
                values: new object[] { "6389e308-5a9c-4517-9cea-7faaa3f94576", 0, new DateTime(2021, 7, 10, 0, 28, 7, 659, DateTimeKind.Local).AddTicks(6761), "12345678987654321", "Dispatcher", "1b3a15ab-a47f-4b17-83be-e457264ad744", 3 });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "CrewID", "DOB", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Role", "SecurityStamp", "StreetID", "TwoFactorEnabled", "UserName" },
                values: new object[] { "2", 0, "5e631a9d-394d-4776-82cd-055f40dc0006", 0, new DateTime(2021, 7, 10, 0, 28, 7, 662, DateTimeKind.Local).AddTicks(2839), "bla", false, "Admin Admin", false, null, null, null, "1234567887654321", null, false, "Dispatcher", "b528c736-6cd9-41b5-adc7-450070ea1e43", 3, false, "admin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "CrewID", "DOB", "PasswordHash", "Role", "SecurityStamp", "StreetID" },
                values: new object[] { "ca6f1945-3ed8-412a-afd8-e81087e4b57c", 1, new DateTime(2021, 7, 9, 3, 21, 29, 562, DateTimeKind.Local).AddTicks(8487), "12345678", "admin", "78a3224e-277d-4df7-a6ed-8b511e3b9263", 1 });
        }
    }
}
