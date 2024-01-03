let termekek = ["ASUS PRIME B450M-A/CSM","GIGABYTE B450M DS3H","ASRock B450M-HDV R4.0","MSI B450M PRO-VDH MAX","ASUS TUF GAMING B550M-PLUS (WI-FI)","AMD Ryzen 5 5600X","Intel Core i5-11600K","AMD Ryzen 7 5800X","Intel Core i7-11700K","AMD Ryzen 9 5900X","Cooler Master MasterBox Q300L","Fractal Design Meshify C","Phanteks Eclipse P400A","Lian Li Lancool II Mesh","Corsair 4000D Airflow","NVIDIA GeForce RTX 3060 Ti","AMD Radeon RX 6700 XT","NVIDIA GeForce RTX 3070","NVIDIA GeForce RTX 3070","NVIDIA GeForce RTX 3080","Samsung 970 EVO Plus","Crucial MX500","WD Blue SN550","ADATA XPG SX8200 Pro","Sabrent Rocket Q","Seagate Barracuda 2TB","Toshiba X300 4TB","Western Digital Black 6TB","Seagate IronWolf 8TB","Toshiba N300 10TB","Cooler Master Hyper 212 RGB Black Edition","Noctua NH-D15","be quiet! Dark Rock Pro 4","Corsair iCUE H150i Elite Capellix","NZXT Kraken X73","Corsair Vengeance LPX 16GB DDR4-3200","G.Skill Ripjaws V 16GB DDR4-3600","Crucial Ballistix 16GB DDR4-3200","HyperX Fury 16GB DDR4-3200","Team T-Force Vulcan Z 16GB DDR4-3200","Seasonic G12 GC-750W Gold","ASUS ROG STRIX 850W GOLD","Cooler Master ELITE NEX 700W","Seasonic FOCUS GX-750W Gold","GIGABYTE GP-UD750GM","LG 24MK400H-B","Samsung S24F350FHU","AOC 24B1XH","Dell SE2419HR","HP 24fw","Logitech M185","Microsoft 850","HP X1000","Logitech M171","HP X500","Logitech K120","Microsoft Wired Keyboard 600","HP Slim USB Keyboard and Mouse","Logitech MK270","Microsoft Wireless Desktop 900"]

let arak = [28000, 24500, 24500, 28000, 52000, 104000, 98000, 140000, 140000, 192000, 17000, 31000, 31000, 31000, 35000, 140000, 175000, 210000, 245000,350000, 45000, 25000, 21000, 45000, 45000, 19000, 35000, 70000, 87000, 105000, 14000, 32000, 32000, 70000, 64000, 28000, 28000, 28000, 28000, 25000, 114000, 200000, 70000, 122000, 105000, 40000, 40000, 40000, 44000, 50000, 5000, 7000, 7000, 7000, 8000, 5000, 6000, 10000, 15000, 20000]

for (let i = 0; i < 5; i++)
{
    document.getElementById("valaszt1").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="alaplap" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 6 < i < 10; i++)
{
    document.getElementById("valaszt2").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="proci" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 11 < i < 15; i++)
{
    document.getElementById("valaszt3").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="haz" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 16 < i < 20; i++)
{
    document.getElementById("valaszt4").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="kartya" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 21 < i < 25; i++)
{
    document.getElementById("valaszt5").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="ssd" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 26 < i < 30; i++)
{
    document.getElementById("valaszt6").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="hdd" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 31 < i < 35; i++)
{
    document.getElementById("valaszt7").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="huto" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 36 < i < 40; i++)
{
    document.getElementById("valaszt8").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="ram" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 41 < i < 45; i++)
{
    document.getElementById("valaszt9").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="tap" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 46 < i < 50; i++)
{
    document.getElementById("valaszt10").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="monitor" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 51 < i < 55; i++)
{
    document.getElementById("valaszt11").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="eger" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

for (let i = 0; 56 < i < 60; i++)
{
    document.getElementById("valaszt12").innerHTML+=`<form action="">
    <label for="">
        <input type="radio" id="1${i+1}" name="bill" value="${i + 1}"> ${termekek[i]}: <span class="ar">${arak[i]} Ft </span>
    </label>
</form>`
}

document.querySelectorAll('input[type="radio"]').forEach(function(radio) 
{
    radio.addEventListener('change', function() 
    {
        Atiranyitas();  
    });
});

function Atiranyitas1()
{
    let alaplap = document.querySelector('input[name="alaplap"]:checked')
    let proci = document.querySelector('input[name="proci"]:checked')
    let haz = document.querySelector('input[name="haz"]:checked')
    let kartya = document.querySelector('input[name="kartya"]:checked')
    let ssd = document.querySelector('input[name="ssd"]:checked')
    let hdd = document.querySelector('input[name="hdd"]:checked')
    let huto = document.querySelector('input[name="huto"]:checked')
    let ram = document.querySelector('input[name="ram"]:checked')
    let tap = document.querySelector('input[name="tap"]:checked')
    let monitor = document.querySelector('input[name="monitor"]:checked')
    let eger = document.querySelector('input[name="eger"]:checked')
    let bill = document.querySelector('input[name="bill"]:checked')
    let nemkerek1 = document.getElementById('nemkerek1')
    let nemkerek2 = document.getElementById('nemkerek2')
    let nemkerek3 = document.getElementById('nemkerek3')
    let kivalasztottak = document.getElementById("osszegzes");
    let osszertek = 0

    selectedItemsDiv.innerHTML = "";

    if (alaplap) 
    {
        let index = parseInt(alaplap.value) - 1;
        kivalasztottak.innerHTML += `<p>Alaplap: ${alaplap.value}</p>`;
        osszertek += arak[index];
    }
    if (proci) 
    {
        let index = parseInt(proci.value) - 1;
        kivalasztottak.innerHTML += `<p>Processzor: ${proci.value}</p>`;
        osszertek += arak[index];
    }
    if (haz) 
    {
        let index = parseInt(haz.value) - 1;
        kivalasztottak.innerHTML += `<p>Gépház: ${haz.value}</p>`;
        osszertek += arak[index];
    }
    if (kartya) 
    {
        let index = parseInt(kartya.value) - 1;
        kivalasztottak.innerHTML += `<p>Videokártya: ${kartya.value}</p>`;
        osszertek += arak[index];
    }
    if (ssd) 
    {
        let index = parseInt(ssd.value) - 1;
        kivalasztottak.innerHTML += `<p>SSD: ${ssd.value}</p>`;
        osszertek += arak[index];
    }
    if (hdd) 
    {
        let index = parseInt(hdd.value) - 1;
        kivalasztottak.innerHTML += `<p>HDD: ${hdd.value}</p>`;
        osszertek += arak[index];
    }
    if (huto) 
    {
        let index = parseInt(huto.value) - 1;
        kivalasztottak.innerHTML += `<p>Processzorhűtő: ${huto.value}</p>`;
        osszertek += arak[index];
    }
    if (ram) 
    {
        let index = parseInt(ram.value) - 1;
        kivalasztottak.innerHTML += `<p>RAM: ${ram.value}</p>`;
        osszertek += arak[index];
    }
    if (tap) 
    {
        let index = parseInt(tap.value) - 1;
        kivalasztottak.innerHTML += `<p>Tápegység: ${tap.value}</p>`;
        osszertek += arak[index];
    }
    if (monitor) 
    {
        let index = parseInt(monitor.value) - 1;
        kivalasztottak.innerHTML += `<p>Tápegység: ${monitor.value}</p>`;
        osszertek += arak[index];
    }
    if (eger) 
    {
        let index = parseInt(eger.value) - 1;
        kivalasztottak.innerHTML += `<p>Tápegység: ${eger.value}</p>`;
        osszertek += arak[index];
    }
    if (bill) 
    {
        let index = parseInt(bill.value) - 1;
        kivalasztottak.innerHTML += `<p>Tápegység: ${bill.value}</p>`;
        osszertek += arak[index];
    }
    kivalasztottak.innerHTML += `<p><strong>Végösszeg: ${osszertek} Ft</strong></p>`;
    if (!alaplap)
    {
        document.getElementById("p1").innerHTML=`<p>Válasszon Alaplapot!</p>`
    }
    if(!proci)
    {
        document.getElementById("p2").innerHTML=`<p>Válasszon Processzort!</p>`
    }
    if(!haz)
    {
        document.getElementById("p3").innerHTML=`<p>Válasszon Gépházat!</p>`
    }
    if(!kartya)
    {
        document.getElementById("p4").innerHTML=`<p>Válasszon Videokártyát!</p>`
    }
    if(!ssd)
    {
        document.getElementById("p5").innerHTML=`<p>Válasszon SSD-t!</p>`
    }
    if(!hdd)
    {
        document.getElementById("p6").innerHTML=`<p>Válasszon HDD-t!</p>`
    }
    if(!huto)
    {
        document.getElementById("p7").innerHTML=`<p>Válasszon RAM-ot!</p>`
    }
    if(!ram)
    {
        document.getElementById("p8").innerHTML=`<p>Válasszon Processzorhűtőt!</p>`
    }
    if(!tap)
    {
        document.getElementById("p9").innerHTML=`<p>Válasszon Tápegységet!</p>`
    }
    if(!monitor, !nemkerek1.checked)
    {
        document.getElementById("p10").innerHTML=`<p>Válasszon Monitort!</p>`
    }
    if(!eger, !nemkerek2.checked)
    {
        document.getElementById("p11").innerHTML=`<p>Válasszon Egeret!</p>`
    }
    if(!bill, !nemkerek3.checked)
    {
        document.getElementById("p12").innerHTML=`<p>Válasszon Billentyűzetet!</p>`
    }
    else
    {
        window.location.href = 'Sikeres.html';
    }
    if(alaplap)
    {
        document.getElementById("p1").innerHTML=``
    }
    if(proci)
    {
        document.getElementById("p2").innerHTML=``
    }
    if(haz)
    {
        document.getElementById("p3").innerHTML=``
    }
    if(kartya)
    {
        document.getElementById("p4").innerHTML=``
    }
    if(ssd)
    {
        document.getElementById("p5").innerHTML=``
    }
    if(hdd)
    {
        document.getElementById("p6").innerHTML=``
    }
    if(huto)
    {
        document.getElementById("p7").innerHTML=``
    }
    if(ram)
    {
        document.getElementById("p8").innerHTML=``
    }
    if(tap)
    {
        document.getElementById("p9").innerHTML=``
    }
    if(monitor)
    {
        document.getElementById("p10").innerHTML=``
    }
    if(eger)
    {
        document.getElementById("p11").innerHTML=``
    }
    if(bill)
    {
        document.getElementById("p12").innerHTML=``
    }
}