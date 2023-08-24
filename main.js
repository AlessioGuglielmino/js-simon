// MI PRENDO GLI ELEMENTI DALL'HTML E LI TRASFORMO IN COSTANTI

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

// CREO DELE COSTANTI CON   -->

// -------------------------------------------------------------

const now = new Date();
console.log(now);

const t = new Date("2023-08-25 09:30");
console.log(t);

let differenzaTempo = t - now;
console.log(differenzaTempo);

const coutDown = setInterval(function () {
  differenzaTempo = differenzaTempo - 1000;
  if (differenzaTempo <= 0) {
    alert("tempo scaduto");
    clearInterval(coutDown);
  } else {
    const oreMancanti = Math.floor(differenzaTempo / 3600000);
    hours.innerText = oreMancanti;

    const minutiMancanti = Math.floor((differenzaTempo % 3600000) / 60000);
    minutes.innerText = minutiMancanti;

    const secondiMancanti = Math.floor((differenzaTempo % 60000) / 1000);
    seconds.innerText = secondiMancanti;
  }
}, 1000);

// Traccia:

// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Consigli:

// Da quante ore è composto un giorno?    24
// Da quanti minuti è composta un'ora?  60
// Da quanti secondi è composto un minuto?  60
// Da quanti millisecondi è composto un secondo?  1000
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?
