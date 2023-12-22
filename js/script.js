console.log('JS OK')

// 1 - prendere gli elementi interessati
// 2 - generare un numero random sia per pc che utente
// 3 - capire chi fa punteggio piu alto e assegnarlo vincitore
// 4 - stampare in pagina tiri e risultato




const user = document.querySelector('.user');
const pc = document.querySelector('.pc');
const winner = document.getElementById('winner');
const risult = document.getElementById('risult');

const userNumber = Math.floor(Math.random()*6) + 1;
const pcNumber = Math.floor(Math.random()*6) + 1;

console.log(userNumber, pcNumber)

let message = 'pareggio';

if(userNumber > pcNumber){
    message = "Ha vinto l'utente";
}else if(userNumber < pcNumber){
    message = 'Ha vinto il pc';
}
user.innerText = userNumber;
pc.innerText = pcNumber;

winner.innerText = message;
