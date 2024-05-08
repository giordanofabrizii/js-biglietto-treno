// > Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// > Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 

//     il prezzo del biglietto è definito in base ai km (0.276 € al km)
//     va applicato uno sconto del 21% per i minorenni
//     va applicato uno sconto del 42% per gli over 65.
//     L'output del prezzo finale va messo fuori in forma umana (con massimo due   decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

// chiedi il numero di chilometri
let km = Number.parseInt(prompt("Ciao, scrivi qui il numero di chilometri che devi percorrere")); 
    // deve essere un numero maggiore di 0
if (isNaN(km) || km <= 0) {
    km = Math.floor(Math.random() * 1000 + 1);
    document.getElementById("km").innerHTML = ("Non sono riuscito a capire cio' che mi hai detto, quindi ti faro' un esempio per " + km + " km.")
} else {
    document.getElementById("km").innerHTML = ("I chilometri che deve percorrere il passeggero sono " + km + ".")
}

// chiedi l'eta del passeggero
let eta =  Number.parseInt(prompt("Perfetto, ora scrivi la tua eta"));
    // deve essere un numero maggiore di 0
if (isNaN(eta) || eta <= 0) {
    eta = Math.floor(Math.random() * 100 + 1);
    document.getElementById("eta").innerHTML = ("Non sono riuscito a capire cio' che mi hai detto, quindi ti faro' un esempio per una persona di " + eta + " anni.")
} else {
    document.getElementById("eta").innerHTML = ("Il passeggero ha " + eta + " anni.")
}

const prezzoPerKm = 0.276 // (in euro)
let prezzoBiglietto = prezzoPerKm * km;

// se eta < di 18: sconto del 20%
if (eta < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.79;
}

// se eta >= 65: sconto del 42%
if (eta >= 65) {
    prezzoBiglietto = prezzoBiglietto * 0.58;
}

prezzoBiglietto = Math.round(prezzoBiglietto * 100) / 100

//  output
document.getElementById("prezzo").innerHTML = ("Il prezzo del biglietto per un passeggero con queste caratteristiche e' di: " + prezzoBiglietto + "€")