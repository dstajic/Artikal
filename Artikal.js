class Artikal {
    constructor( naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
       
    }
}

function createArticleRows(Artikli)
{
for(let i=0;i<Artikli.length;i++)
{
    let tabela = document.querySelector("#Artikli");
    let tr = document.createElement("tr"); ;

    let broj= document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");
    
    broj.style.border="1px solid black";
    naziv.style.border="1px solid black";
    cena.style.border="1px solid black";

    broj.textContent = i+1;
    naziv.textContent = Artikli[i].naziv;
    cena.textContent = Artikli[i].cena;

    tr.appendChild(broj);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    tr.addEventListener("click", function() {
        prikaziDetalje(Artikli[i]);
      });
    tabela.appendChild(tr);
}
}

function initializeArtikli() {
    let Artikli = [
      new Artikal("Kafa", 100, "Kafa od kafe"),
      new Artikal("Mleko", 120, "Mleko od mleka"),
      new Artikal("Jaja", 150, "Jaja od jaja")
    ];
    createArticleRows(Artikli);
}

function prikaziDetalje(artikal) {
    let detaljiDiv = document.querySelector("#detalji");
    detaljiDiv.innerHTML = "";

    let pNaziv = document.createElement("p");
    pNaziv.textContent = "Naziv: " + artikal.naziv;

    let pCena = document.createElement("p");
    pCena.textContent = "Cena: " + artikal.cena + " RSD";

    let pOpis = document.createElement("p");
    pOpis.textContent = "Opis: " + artikal.opis;

    detaljiDiv.appendChild(pNaziv);
    detaljiDiv.appendChild(pCena);
    detaljiDiv.appendChild(pOpis);
    
    detaljiDiv.style.display = "block";
}


initializeArtikli();