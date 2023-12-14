using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    internal class Alkatresz
    {
        string tipus;
        string nev;
        string parameter;
        string ar;

        public Alkatresz() { }
        public Alkatresz(string tipus, string nev, string parameter, string ar)
        {
            this.tipus = tipus;
            this.nev = nev;
            this.parameter = parameter;
            this.ar = ar;
        }

        public string Tipus { get => tipus; }
        public string Nev { get => nev;}
        public string Parameter { get => parameter; }
        public string Ar { get => ar; }
    }
}

