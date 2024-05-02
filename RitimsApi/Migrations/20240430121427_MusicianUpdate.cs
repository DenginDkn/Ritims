using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RitimsApi.Migrations
{
    /// <inheritdoc />
    public partial class MusicianUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Instrument",
                table: "Musicians",
                newName: "Type");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Musicians",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Musicians",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Musicians",
                type: "text",
                nullable: true);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Musicians");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Musicians");

            migrationBuilder.DropColumn(
                name: "Place",
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
                newName: "Instrument");
        }
    }
}
