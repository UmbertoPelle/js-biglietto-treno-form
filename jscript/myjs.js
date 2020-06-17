var name;
var eta;
var km;
var prezzoBiglietto;
var bigliettoScontato;
var genere = document.getElementById('genere').value;
var btnCrea = document.getElementById('creaBiglietto');
var btnAnnulla = document.getElementById('annulla');

btnCrea.addEventListener("click", function () {
  name = document.getElementById('name').value;
  km = document.getElementById('km').value;
  prezzoBiglietto = km * 0.21;

  if (genere == "Minorenne") {
    bigliettoScontato = ((prezzoBiglietto * 80)/ 100);
    document.getElementById('prezzo').innerHTML = bigliettoScontato.toFixed(2) + "€";
    document.getElementById('categoria').innerHTML = genere;
  }else if (genere == "Over65") {
    bigliettoScontato = ((prezzoBiglietto * 60)/ 100);
    document.getElementById('prezzo').innerHTML = bigliettoScontato.toFixed(2) + "€";
    document.getElementById('categoria').innerHTML = genere;
  }else {
    document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2) + "€";
    document.getElementById('categoria').innerHTML = genere;
  }

  var carrozza = Math.floor(Math.random()*10)+ 1;
  var numTreno = Math.floor(Math.random() * (1000 - 700) + 700);
  document.getElementById('outPutNome').innerHTML = name;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('treno').innerHTML = numTreno;

  document.getElementById('output').className = "show";
});

btnAnnulla.addEventListener("click", function () {

  document.getElementById('output').className = "hidden";
  document.getElementById('name').value = "";
  document.getElementById('km').value = "";
  document.getElementById('genere').value = "maggiorenne";


});
