using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kurs.DAL
{
    public class BaseEntity: IEntity
    {
        Guid id;
        public Guid Id { get {
                if (id == Guid.Empty)
                    id = Guid.NewGuid();
                return id; } 
            set { id = value; } }
    }
}
