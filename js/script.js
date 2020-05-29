//funzione palindromo
function palindromo(x) {
  //variabili palindromo
  var parola = x.toLowerCase();
  var parolaArray = parola.split("");
  var parolaArrayInversa = [];

  //ciclo inversione array
  for (var i = parolaArray.length -1; i >= 0; i--) {
    parolaArrayInversa += parolaArray[i];
  }

  //condizione risultato
  if (parola == parolaArrayInversa) {
    return ("è una parola palindroma");
  }

  else {
    return ("non è una parola palindroma");
  }
}

//funzione pari e dispari
function paridispari(a, b){
  //condizioni validità
  var condizione = a.toLowerCase();
  if (condizione != "pari" && condizione != "dispari" || b<1 || b>5){
    return("Inserisci correttamente i dati");
  }

  //variabili funzione
  var numeroUtente = parseInt(b);
  var numeroComputer = Math.ceil(Math.random() * 4);
  var somma = numeroComputer + numeroUtente;

  //condizione risultato
  if ((somma % 2 == 0) && condizione == "pari") {
    return ("Hai vinto! " + somma + " è pari")
  }

  else if ((somma % 2 == 1) && condizione == "dispari") {
    return ("Hai vinto! " + somma + " è dispari")
  }

  else if ((somma % 2 == 0) && condizione == "dispari") {
    return ("Hai perso! " + somma + " è pari")
  }

  else {
    return ("Hai perso!! " + somma + " è dispari")
  }
}

//interazione palindromo
var parola = document.getElementById('palindromo');
var palindromoBottone = document.getElementById('palindromo-bottone');
var palindromoRisultato = document.getElementById('palindromo-risultato');

palindromoBottone.addEventListener('click',
function() {
  palindromoRisultato.innerHTML = (parola.value + " " + palindromo(parola.value));
}
);

//interazione pari e dispari
var condizione = document.getElementById('paridispari');
var numero = document.getElementById('paridispari-numero');
var pariDispariBottone = document.getElementById('paridispari-bottone');
var pariDispariRisultato = document.getElementById('paridispari-risultato');

pariDispariBottone.addEventListener('click',
function() {
  pariDispariRisultato.innerHTML = (paridispari(condizione.value, numero.value));
}
);
