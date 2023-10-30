using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public byte[] Password { get; set; }
        public byte[] PasswordKey { get; set; }
        public int PlayerRpsOverallScore { get; set; }
        public int ComputerRpsOverallScore { get; set; }
        public int PlayerTttOverallScore { get; set; }
        public int ComputerTttOverallScore { get; set; }
    }
}