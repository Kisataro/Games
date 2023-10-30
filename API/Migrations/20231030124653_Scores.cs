using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Scores : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"UPDATE [dbo].[Users] SET
             [PlayerRpsOverallScore],
             [ComputerRpsOverallScore],
             [PlayerTttOverallScore],
             [ComputerTttOverallScore]='0' WHERE
             [PlayerRpsOverallScore],
             [ComputerRpsOverallScore],
             [PlayerTttOverallScore],
             [ComputerTttOverallScore] IS NULL");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
