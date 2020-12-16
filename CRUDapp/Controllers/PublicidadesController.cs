using System.Collections.Generic;
using System.Web.Http;
using CRUDapp.Models;

namespace CRUDapp.Controllers
{
    [RoutePrefix("api/publicidades")]
    public class PublicidadesController : ApiController
    {

        public IHttpActionResult Get()
        {
            return Ok(Gateway.Lista);
        }

        public IHttpActionResult Get([FromUri(Name = "title")] string title) {
            var p = Gateway.FindByTitle(title);
            if (p == null) return BadRequest();
            return Ok(p);
        }

        public IHttpActionResult Get(int id)
        {
            var p = Gateway.Find(id.ToString());
            if (p == null) return BadRequest();
            return Ok(p);
        }

        // POST api/values
        public IHttpActionResult Post(Publicidad p)
        {
            if (p == null) return BadRequest();
            Gateway.Add(p);
            return Ok();
        }

        // PUT api/values/5
        public IHttpActionResult Put(string id, [FromBody]Publicidad p)
        {
            Gateway.update(id, p);
            return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(string id)
        {
            Gateway.remove(id);
            return Ok();
        }

        public IHttpActionResult Delete()
        {
            Gateway.removeAll();
            return Ok();
        }
    }
}
