class Artikal {
    constructor( naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
       
    }
}

function createArticleRows(Artikli)
{
    let tabela = document.querySelector("#Artikli");
    tabela.innerHTML = "";
for(let i=0;i<Artikli.length;i++)
{
    
    
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
    let Artikli = [];
    const sacuvaniArtikli = localStorage.getItem("Artikli");
    if (sacuvaniArtikli) {
        Artikli = JSON.parse(sacuvaniArtikli);
    }
    /*let Artikli = [
      new Artikal("Kafa", 100, "Kafa od kafe"),
      new Artikal("Mleko", 120, "Mleko od mleka"),
      new Artikal("Jaja", 150, "Jaja od jaja")
    ];*/
    
    createArticleRows(Artikli);
    handleFormSubmission(Artikli);
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

function handleFormSubmission(Artikli) {
  let submitBtn = document.querySelector('#submit')
  submitBtn.addEventListener('click', function() {
      const forma = document.querySelector('#form')
      const formData = new FormData(forma)

     let naziv=formData.get('Naziv');
     let cena=formData.get('Cena');
     let opis=formData.get('Opis');

      const novArtikal = new Artikal(naziv, cena, opis)
      for(let i=0;i<Artikli.length;i++)
      {
        if(Artikli[i].naziv===naziv)
        {
          alert("Vec postoji artikal sa ovim nazivom")
          return;
        }
        
        
      }
      
            Artikli.push(novArtikal)
            localStorage.setItem("Artikli", JSON.stringify(Artikli));
            createArticleRows(Artikli)
      
  });
}

initializeArtikli();
