class Artikal {
    constructor( naziv, cena, opis, broj) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
        this.broj = broj
    }
}

let Kafa= new Artikal("Kafa", 100, "Kafa od kafe",1);
let Mleko = new Artikal("Mleko", 120, "Mleko od mleka",2);
let Jaja = new Artikal("Jaja", 150, "Jaja od jaja",3);

let Artikli = [Kafa, Mleko, Jaja];


let tabela = document.querySelector("#Artikli");
for(let artikal of Artikli)

{
    let tr = document.createElement("tr"); 
    
    let broj= document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");
    
    broj.style.border="1px solid black";
    naziv.style.border="1px solid black";
    cena.style.border="1px solid black";

    broj.textContent = artikal.broj;
    naziv.textContent = artikal.naziv;
    cena.textContent = artikal.cena;

    tr.appendChild(broj);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    tabela.appendChild(tr);
}