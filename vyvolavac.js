let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

  // Generujeme náhodný index
  let vyherniIndex = Math.floor(Math.random() * jmena.length);

  // Získáme výherní jméno na patřičném indexu
  let vyherniJmeno = jmena[vyherniIndex];

  // Vyřadíme vylosované jméno z osudí
  jmena.splice(vyherniIndex, 1);


  // Výherní jméno si uložíme do pole k ostatním výherním a dame ho na zacatek
  tazenaJmena.unshift(vyherniJmeno);

  let vyherce = document.querySelector('#vyherka');
  vyherce.textContent = vyherniJmeno;

  let seznam = document.querySelector('#seznam');
  seznam.textContent = tazenaJmena;
  //arraymove();

  //pocitadlo
  let pocitadlo = document.getElementById('pocitadlo');
  let pocetCelkem = tazenaJmena.length;
  console.log(pocetCelkem);
  pocitadlo.textContent = pocetCelkem;

}

//restart
function restartVyvolavani() {
  window.location.reload();
}




// function arraymove(tazenaJmena, -1, 0) {
//   let element = tazenaJmena[-1];
//   tazenaJmena.splice(-1, 1);
//   tazenaJmena.splice(0, 0, element);
//   console.log(tazenaJmena);
// }