using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class initii : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Streets",
                columns: new[] { "Id", "Name", "Priority" },
                values: new object[] { 1, "Gagarinova", 8 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Streets",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
