using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class sdaa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Devices",
                columns: new[] { "Id", "CoordX", "CoordY", "Name", "StreetId", "Type" },
                values: new object[] { 3, 9.8000000000000007, 9.8000000000000007, "Bla", null, "nesto" });

            migrationBuilder.InsertData(
                table: "Streets",
                columns: new[] { "Id", "Name", "Priority" },
                values: new object[] { 2, "Pasterova", 7 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Devices",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Streets",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
