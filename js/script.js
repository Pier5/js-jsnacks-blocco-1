// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// const num1 = parseInt(prompt('Inserisci primo numero'));
// const num2 = parseInt(prompt('Inserisci secondo numero'));

// if (num1 > num2) {
//     alert(num1);
// } else if (num1 < num2) {
//     alert(num2);
// } else {
//     alert('sono uguali')
// }


// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// const par1 = prompt('Inserisci prima parola');
// const par2 = prompt('Inserisci seconda parola');

// if (par1.length > par2.length) {
//     alert(`${par1} ${par2}`);
// } else if (par1.length < par2.length) {
//     alert(`${par2} ${par1}`);
// } else {
//     alert(`${par1} ${par2}`);
// }



// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//  let somma = 0;

//  for (let i = 0; i < 10; i++) {
//      let num = parseInt(prompt('Inserisci numero'));
//      somma = somma + num;
//  }

//  alert(`Il risultato è ${somma}`);



// Snack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.

let invited = ['John', 'Geralt', 'Mia', 'Ciri', 'Triss', 'Yennefer'];
let output = document.querySelector('.output');
let nome = prompt('Inserisci il tuo nome');
let found = false;

for (let i = 0; i < invited.length; i++) {
    if (invited[i].toLowerCase() == nome.toLowerCase()) {
        found = true;
    } 
    if (found == true) {
        output.innerHTML = 'Invito alla festa confermato';
    } else {
        output.innerHTML = 'Invito alla festa non confermato';
    }
}





