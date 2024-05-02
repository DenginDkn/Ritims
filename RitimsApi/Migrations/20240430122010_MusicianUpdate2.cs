using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RitimsApi.Migrations
{
    /// <inheritdoc />
    public partial class MusicianUpdate2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Musicians");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Musicians");

            migrationBuilder.DropColumn(
                name: "Time",
                table: "Musicians");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Musicians",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "Place",
                table: "Musicians",
                newName: "Email");

            migrationBuilder.AddColumn<bool>(
                name: "IsMusician",
                table: "Musicians",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsMusician",
                table: "Musicians");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Musicians",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Musicians",
                newName: "Place");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Musicians",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Musicians",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "Time",
                table: "Musicians",
                type: "interval",
                nullable: false,
                defaultValue: new TimeSpan(0, 0, 0, 0, 0));
        }
    }
}
