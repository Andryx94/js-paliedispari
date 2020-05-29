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
  //condizioni validità + pari/dispari
  var condizione = a.toLowerCase();
  if (a != "pari" && a != "dispari" || b<1 || b>5){
    return("Inserisci correttamente i dati");
  }

  //variabili funzione
  var numeroUtente = parseInt(b);
  var numeroComputer = Math.ceil(Math.random() * 4);
  var somma = numeroComputer + numeroUtente;

  //condizione risultato
  if ((somma % 2 == 0) && a == "pari") {
    return ("Hai indovinato! " + somma + " è pari.")
  }

  else if ((somma % 2 == 0) && a == "dispari") {
    return ("Hai perso! " + somma + " è pari.")
  }

  else if ((somma % 2 == 1) && a == "dispari") {
    return ("Hai indovinato! " + somma + " è dispari.")
  }

  else {
    return ("Hai perso!! " + somma + " è dispari.")
  }
}

//interazione palindromo
var parola = prompt("Dimmi una parola");
alert(parola + " " + palindromo(parola));

//interazione pari e dispari
var condizione = prompt("Dimmi pari o dispari");
var numero = prompt("Dimmi un numero da 1 a 5");
alert(paridispari(condizione, numero));
