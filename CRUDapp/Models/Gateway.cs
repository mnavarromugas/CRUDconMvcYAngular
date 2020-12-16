using System.Collections.Generic;
using System.Linq;
using System.Web.Razor.Generator;

namespace CRUDapp.Models
{
    public static class Gateway
    {
        public static List<Publicidad> Lista { get; set; } = new List<Publicidad>
        {
            new Publicidad() {description = "hola", id = "1", published = false, title = "hola"},
            new Publicidad() {description = "hola2", id = "2", published = false, title = "hola2"}
        };

        public static void Add(Publicidad p)
        {
            Lista.Add(p);
        }

        public static Publicidad Find(string id)
        {
            return Lista.Find(x => x.id == id);
        }

        public static void update(string id, Publicidad p)
        {
            Lista = Lista.Where(w => w.id == id).Select(s => p).Union(Lista.Where(w => w.id != id)).ToList();
        }

        public static void remove(string id)
        {
            Lista.Remove(new Publicidad() { id = id });
        }

        public static void removeAll()
        {
            Lista = new List<Publicidad>();
        }


    }
}