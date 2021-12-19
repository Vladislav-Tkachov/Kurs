using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kurs.DAL
{
    public class Image: BaseEntity
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public bool Main { get; set; }
        public Guid CardId { get; set; } 
    }
}
