using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class ScoreUpdateDto
    {
        public int PlayerRpsOverallScore { get; set; }
        public int ComputerRpsOverallScore { get; set; }
        public int PlayerTttOverallScore { get; set; }
        public int ComputerTttOverallScore { get; set; }
    }
}