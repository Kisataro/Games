using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveScores : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ComputerRpsOverallScore",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ComputerTttOverallScore",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PlayerRpsOverallScore",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PlayerTttOverallScore",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ComputerRpsOverallScore",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ComputerTttOverallScore",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlayerRpsOverallScore",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlayerTttOverallScore",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
