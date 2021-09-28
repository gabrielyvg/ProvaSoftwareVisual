using System;

namespace API.Models
{   

    public class Automovel
    {
       
        public Automovel() => CriadoEm = DateTime.Now;

        public int Id { get; set; }
        public string Marca { get; set; }  
        public string Cor { get; set; }
        public string Modelo { get; set; }
        public string Cambio { get; set; }
        public int Ano { get; set; }
        public DateTime CriadoEm { get; set; }
       
    }

}