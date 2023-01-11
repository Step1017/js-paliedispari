/*STEP:
1.Chiedo all'utente di inserire una parola
2.Elimino spazi tra le parole
3.Definire funzione
    3a.Creare variabile per stringa al contrario
    3b.Inserisco le lettere al contrario all'interno della variabile creata
4.Controllare risultato
*/

//Chiedo all'utente di inserire una parola:
let word = prompt ('Inserisci una parola').toLowerCase();
console.log ('Parola',word)

//Elimino spazi tra le parole:
const finalWord = word.replace(/\s+/g, '');

//Definisco funzione per verificare se la parola è palindroma:
function palindrom(myString) {

    //Creo variabile per stringa al contrario
    let reverseString = '';

    //inserisco le lettere di myString al contrario all'interno di reverseString
    for (let i = myString.length - 1; i >= 0; i--) {
        reverseString = reverseString.concat(myString.charAt(i));
    }

    return myString == reverseString;
}

//Controllo risultato:

if (palindrom(finalWord)) {
    console.log(word + ' è palindroma')
}
else {
    console.log(word + ' non è palindroma')
}