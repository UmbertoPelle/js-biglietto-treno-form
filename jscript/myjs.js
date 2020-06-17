var name;
var eta;
var km;
var prezzoBiglietto;
var bigliettoScontato;
var genere = document.getElementById('genere').value;
var btnCrea = document.getElementById('creaBiglietto');
var btnAnnulla = document.getElementById('annullaBiglietto');

btnCrea.addEventListener("click", function () {
  name = document.getElementById('name').value;
  km = document.getElementById('km').value;
  prezzoBiglietto = km * 0.21;

  if (genere == "minorenne") {
    bigliettoScontato = ((prezzoBiglietto * 80)/ 100);
    document.getElementById('prezzoScontato').innerHTML = "il tuo biglietto costa " + bigliettoScontato.toFixed(2) + "€"
  }else if (genere == "over65") {
    bigliettoScontato = ((costoBiglietto * 60)/ 100);
    document.getElementById('prezzoScontato').innerHTML = "il tuo biglietto costa " + bigliettoScontato.toFixed(2) + "€"
  }else {
    document.getElementById('prezzoScontato').innerHTML = "il tuo biglietto costa " + prezzoBiglietto.toFixed(2) + "€"
  }
});
