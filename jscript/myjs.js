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
    document.getElementById('prezzo').innerHTML = bigliettoScontato.toFixed(2) + "€";
  }else if (genere == "over65") {
    bigliettoScontato = ((prezzoBiglietto * 60)/ 100);
    document.getElementById('prezzo').innerHTML = bigliettoScontato.toFixed(2) + "€";
  }else {
    document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2) + "€";
  }

  var carrozza = Math.floor(Math.random()*10)+ 1;
  var numTreno = Math.floor(Math.random() * (1000 - 700) + 700);
  document.getElementById('outPutNome').innerHTML = name;
  document.getElementById('categoria').innerHTML = genere;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('treno').innerHTML = numTreno;

  document.getElementById('output').className = "show";
});
