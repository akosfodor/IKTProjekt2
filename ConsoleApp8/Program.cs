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
            Console.Write("Bevitt alkatrészek törlése(igen/nem):");
            string torles = Console.ReadLine();
            if (torles == "igen")
            {
                Console.WriteLine("Az adatok törölve lettek!");
            }
            else if (torles == "nem")
            {
                Console.WriteLine("Az adatok NEM lettek törölve!");
            }
            else
            {
                Console.WriteLine("Nem lesznek törölve az adatok a helytelen válasz miatt!");
            }
        }
        static void Main(string[] args)
        {
            
            Console.ReadKey();
        }
    }
}