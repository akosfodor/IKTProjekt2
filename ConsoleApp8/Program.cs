using System.Reflection.Metadata;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices;

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
                int ar = Convert.ToInt32(sorElemei[3]);
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
                int ar = (Convert.ToInt32(Console.ReadLine()));
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
            int db = 0;
            foreach (var a in alkatreszek)
            {
                if (min <= a.Ar && max >= a.Ar)
                {
                    Console.WriteLine($"Típus: {a.Tipus}\nNév: {a.Nev}\nParaméterek: {a.Parameter}\nÁr: {a.Ar} Ft\n");
                    db++;
                }
            }
            if (db == 0) Console.WriteLine("Nem található ilyen alkatrész!");
        }
        static void Stats()
        {
            Console.Write("Írjon be egy típust vagy nevet:");
            string stat = Console.ReadLine();
            int db = alkatreszek.Count(a=> a.Tipus.ToLower() == stat.ToLower() || a.Nev.ToLower().Contains(stat.ToLower()));
            Console.WriteLine($"{db}db van a/az {stat} termékből");
        }
        static void Kedvezmeny(string fajlNev)
        {
            Console.WriteLine("Írja be a százalékot:");
            int szazalek = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Írja be a termékeket amire szeretné a kedvezményt(minden,termék neve vagy típusa)");
            string kedvTermek = Console.ReadLine();
            File.WriteAllText(fajlNev,"");
            foreach(var a in alkatreszek)
            {
                if (kedvTermek == "minden" || a.Tipus.ToLower() == kedvTermek.ToLower() || a.Tipus.ToLower().Contains(kedvTermek.ToLower()))
                {
                    a.Ar = Convert.ToInt32(a.Ar*(1 - szazalek / 100f));
                    Console.WriteLine(a.Ar);
                }
                File.AppendAllText(fajlNev, $"{a.Tipus};{a.Nev};{a.Parameter};{a.Ar}" + Environment.NewLine);
            }
        }
        static void Html()
        {
            string eredmeny = "";
            eredmeny += "<div id=\"container\">";
            foreach (var a in alkatreszek)
            {
                eredmeny += $@"
    <div class=""termek"">
        <div>Típus: {a.Tipus}</div>
        <div>Név: {a.Nev}</div>
        <div>Paraméter: {a.Parameter}</div>
        <div>Ár: {a.Ar}</div>
    </div>";
            }
            eredmeny += "\n</div>\n";
            File.WriteAllText("output.html", eredmeny);
        }
        static void Main(string[] args)
        {
            string fajlNev = "alkatreszek.txt";
            while (true)
            {
                Console.WriteLine("Írja be hogy melyik feladatot kívánja elindítani(Hozzaadas,Kereses1,Kereses2,Statisztika,Kedvezmeny):");
                string feladat = Console.ReadLine();
                Beolvasas(fajlNev);
                if (feladat == "Hozzaadas")
                {
                    Kiirat(fajlNev);
                    Beolvasas(fajlNev);
                    Html();
                }
                else if (feladat == "Kereses1")
                {
                    Search1();
                }
                else if (feladat == "Kereses2")
                {
                    Search2();
                }
                else if (feladat == "Statisztika")
                {
                    Stats();
                }
                else if (feladat == "Kedvezmeny")
                {
                    Kedvezmeny(fajlNev);
                    Beolvasas(fajlNev);
                    Html();
                }
                else
                {
                    continue;
                }
            }
 
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