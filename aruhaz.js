function Vasarlas()
{
    alert("Biztos megveszi?")
    alert("Nem túl jó vétel.")
    alert("Ennél bármelyik gép jobb befektetés.")
    alert("Hát oké.")
}

function Atiranyitas()
{
    let nev = document.getElementById("nev").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
    let varos = document.getElementById("var").value
    let irsz = document.getElementById("irsz").value
    let utca = document.getElementById("utca").value
    let hsz = document.getElementById("hsz").value
    let szallitasm = document.querySelector('input[name="radio"]:checked')
    let fizetesm = document.querySelector('input[name="radio1"]:checked')
    let elfogad = document.getElementById("elfogad")
    if (nev === "")
    {
        document.getElementById("pnev").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(email === "")
    {
        document.getElementById("pemail").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(tel === "")
    {
        document.getElementById("ptel").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(varos === "")
    {
        document.getElementById("pvar").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(irsz === "")
    {
        document.getElementById("pirsz").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(utca === "")
    {
        document.getElementById("putca").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(hsz === "")
    {
        document.getElementById("phsz").innerHTML=`<p>A mező kitöltése kötelező!</p>`
    }
    if(!szallitasm)
    {
        document.getElementById("pradio").innerHTML=`<p>Válasszon szállítási módot!</p>`
    }
    if(!fizetesm)
    {
        document.getElementById("pradio1").innerHTML=`<p>Válasszon fizetési módot!</p>`
    }
    if(!elfogad.checked)
    {
        document.getElementById("pelfogad").innerHTML=`<p>A feltételek elfogadása kötelező!</p>`
    }
    else
    {
        window.location.href = 'Sikeres.html';
    }
    if(nev !== "")
    {
        document.getElementById("pnev").innerHTML=``
    }
    if(email !== "")
    {
        document.getElementById("pemail").innerHTML=``
    }
    if(tel !== "")
    {
        document.getElementById("ptel").innerHTML=``
    }
    if(varos !== "")
    {
        document.getElementById("pvar").innerHTML=``
    }
    if(irsz !== "")
    {
        document.getElementById("pirsz").innerHTML=``
    }
    if(utca !== "")
    {
        document.getElementById("putca").innerHTML=``
    }
    if(hsz !== "")
    {
        document.getElementById("phsz").innerHTML=``
    }
    if(szallitasm)
    {
        document.getElementById("pradio").innerHTML=``
    }
    if(fizetesm)
    {
        document.getElementById("pradio1").innerHTML=``
    }
    if(elfogad.checked)
    {
        document.getElementById("pelfogad").innerHTML=``
    }
}

function Ertekeles() 
{
    var ujert = document.getElementById('ujert').value;
    var ujszov = document.getElementById('ujszov').value;

    if (ujert < 1 || ujert > 5) 
    {
        alert('Az értékelésnek 1 és 5 között kell lennie.');
        return;
    }

    var ertekelesek = document.getElementById('ertekelesek');
    var ertekeles = document.createElement('div');
    ertekeles.className = 'ertekeles';
    ertekeles.innerHTML = 'Felhasználó ' + (ertekelesek.childElementCount + 1) + ': ';
    var ertek = document.createElement('span');
    ertek.className = 'ertek';
    ertek.textContent = ujert;
    ertekeles.appendChild(ertek);

    if (ujszov !== '') 
    {
        var szovegert = document.createElement('span');
        szovegert.className = 'szoveg';
        szovegert.textContent = ' - ' + ujszov;
        ertekeles.appendChild(szovegert);
    }

    ertekelesek.appendChild(ertekeles);

    Atlagfrissit();
}

function Atlagfrissit() 
{
    var ertekelesek = document.getElementsByClassName("ertek");
    var osszesert = 0;

    for (var i = 0; i < ertekelesek.length; i++) 
    {
        osszesert += parseFloat(ertekelesek[i].textContent);
    }

    var atlagert = osszesert / ertekelesek.length;

    var atlagertek = document.getElementById('atlagert');
    atlagertek.textContent = atlagert.toFixed(1);
}