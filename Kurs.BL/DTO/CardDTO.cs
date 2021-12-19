using Kurs.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kurs.BL
{
    public class CardDTO : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public TypeCard Type { get; set; }
        public List<Image> Images { get; set; } = new List<Image>();
    }
}
