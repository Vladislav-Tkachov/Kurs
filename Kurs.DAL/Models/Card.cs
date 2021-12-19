using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Kurs.DAL
{
    public class Card: BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public TypeCard Type { get; set; }
    }
}
