using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web.Razor.Generator;
using System.Web.WebPages;

namespace CRUDapp.Models
{
    public static class Gateway
    {
        private static int IdGenerator = 3;

        public static List<Publicidad> Lista { get; set; } = new List<Publicidad>
        {
            new Publicidad() {description = "hola", id = "1", published = false, title = "hola"},
            new Publicidad() {description = "hola2", id = "2", published = false, title = "hola2"}
        };

        public static void Add(Publicidad p)
        {
            p.id = IdGenerator.ToString();
            IdGenerator++;

            Lista.Add(p);
        }

        public static Publicidad Find(string id)
        {
            return Lista.Find(x => x.id == id);
        }

        public static void update(string id, Publicidad p)
        {
            p.id = id; //le agrego un id al modificar

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


        public static List<Publicidad> FindByTitle(string t)
        {
            return t.IsEmpty() ? new List<Publicidad>() : Lista.FindAll(x => x.title.Contains(t));
        }
    }
}