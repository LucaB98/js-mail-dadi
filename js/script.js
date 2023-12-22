console.log('JS OK')

// 1 - prendere gli elementi interessati 
// 2 - inventare una array con email autorizzate
// 3 - chiedere all'utente la sua email con form 
// 4 - controllo dell'email inserita nel form
// 5 - validazione della email

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const result = document.getElementById('result');
const error = document.querySelector('.invalid-feedback')

console.log(input, button, form, result)

const validEmail = ['luca@bellan.it', 'matteo@rogato.it', 'giulia@tagliareni.it'];

console.log(validEmail)

button.addEventListener('click', function(){
    const userEmail = input.value.trim();
    console.log(userEmail);

    if (!userEmail){
        input.classList.add('is-invalid');
        return;
    };

    let userIsAllowed = false;

    for(let i = 0; i < validEmail.length; i++){
        console.log('mail controllata: ', validEmail[i]);
        console.log('mail dell utente: ', userEmail);

        if(userEmail === validEmail[i]){
            console.log('trovata');
        }
    }
});

 
