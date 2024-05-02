using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RitimsApi.Migrations
{
    /// <inheritdoc />
    public partial class MusicianUpdate3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsMusician",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsMusician",
                table: "Musicians");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsMusician",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsMusician",
                table: "Musicians",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
