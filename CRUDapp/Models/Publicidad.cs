namespace CRUDapp.Models
{
    public class Publicidad
    {
        public string id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public bool published { get; set; }

        //El siguiente código es para comparar igualdad entre Publicidades
        protected bool Equals(Publicidad other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Publicidad) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }
    }
}