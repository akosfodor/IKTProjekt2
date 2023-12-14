using System.Reflection.Metadata.Ecma335;

namespace ConsoleApp8
{
    internal class Program
    {
        static List<Alkatresz> alkatreszek;
        static void Beolvasas(string fajlNev)
        {
            alkatreszek = new List<Alkatresz>();
            foreach (var sor in File.ReadAllLines(fajlNev))
            {
                var sorElemei = sor.Split(';');
                string tipus = sorElemei[0];
                string nev = sorElemei[1];
                string parameter = sorElemei[2];
                string ar = sorElemei[3];
                alkatreszek.Add(new Alkatresz(tipus, nev, parameter, ar));
            }
        }
        static void Kiirat (string fajlNev)
        {
            Beolvasas (fajlNev);
            Console.Write("Új alkatrész hozzáadása(igen/nem):");
            string valasz = Console.ReadLine();
            if (valasz == "igen")
            {
                Console.WriteLine("\n");
                Console.Write("Alkatrész típusa:");
                string tipus = Console.ReadLine();
                Console.Write("Alkatrész neve:");
                string nev = Console.ReadLine();
                Console.Write("Alkatrész paramétere:");
                string parameter = Console.ReadLine();
                Console.Write("Alkatrész ára:");
                string ar = Console.ReadLine();
                File.AppendAllText(fajlNev, $"{tipus};{nev};{parameter};{ar}" + Environment.NewLine);
                Console.WriteLine("Alkatrész hozzáadva\n");
                
            }
        }
        static void Search1()
        {
            Console.WriteLine("Keresés");
            Console.Write("Alkatrész típusa vagy neve:");
            string tipusnev = Console.ReadLine();
            int db = 0;
            foreach (var a in alkatreszek)
            {
                if (a.Tipus.ToLower() == tipusnev.ToLower() || a.Nev.ToLower().Contains(tipusnev.ToLower()))
                { 
                    Console.WriteLine($"Típus: {a.Tipus}\nNév: {a.Nev}\nParaméterek: {a.Parameter}\nÁr: {a.Ar} Ft\n");
                    db++;
                }
            }
            if (db == 0) Console.WriteLine("Nem található ilyen alkatrész!");
        }
        static void Search2()
        {
            Console.Write("Minimum ár:");
            int min = Convert.ToInt32(Console.ReadLine());
            Console.Write("Maximum ár:");
            int max = Convert.ToInt32(Console.ReadLine());

        }
        static void Main(string[] args)
        {
            
            Console.ReadKey();
        }
    }
}
/*
Uno
Dos
Tres
Cuatro
Cinco
Seis
Siete
Ocho
Nueve
Diez
*/