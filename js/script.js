// Snack 1.1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

/*
const num1 = parseInt(prompt('Inserisci primo numero'));
const num2 = parseInt(prompt('Inserisci secondo numero'));

if (num1 > num2) {
    alert(num1);
} else if (num1 < num2) {
    alert(num2);
} else {
    alert('sono uguali')
}
*/





// Snack 1.2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

/*
const par1 = prompt('Inserisci prima parola');
const par2 = prompt('Inserisci seconda parola');

if (par1.length < par2.length) {
    alert(`${par1} ${par2}`);
} else if (par1.length > par2.length) {
    alert(`${par2} ${par1}`);
} else {
    alert(`${par1} ${par2}`);
}
*/





// Snack 1.3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

/*
let somma = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Inserisci numero'));
    somma = somma + num;
}

alert(`Il risultato è ${somma}`);
*/





// Snack 1.4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.

/*
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
*/





// Snack 1.5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

/*
let arr = [];
let output = document.querySelector('.output');

for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt('Inserisci numero'));
    if (num % 2 == 1) {
        arr.push(num);
        output.innerHTML = arr;  
    } 
}
*/





// Snack 1.6
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

/*
let sum = 0;
let output = document.querySelector('.output');
let num = prompt('Inserisci numero a 4 cifre');
num = num.toString();

for (let numTot = 0; numTot < num.length; numTot++) {
    sum += parseInt(num[numTot]);
}

output.innerHTML = sum;
*/






// Snack 1.9
// Calcola la somma e la media dei primi dieci numeri

// variabili generali per entrambi i cicli
/*
let sum = 0;
let output = document.querySelector('.output'); 
let outputTwo = document.querySelector('.output-two'); 
*/


// qui ho usato il ciclo for
/*
for (let i = 1; i <= 10; i++) {
    sum = sum += i;
}

let average = sum / 10;

output.innerHTML = sum;
outputTwo.innerHTML = average;
*/




// qui ho usato il ciclo while
/*
let i = 1;

while (i <= 10) {
    sum = sum += i;
    i++;
}

let average = sum / 10;

output.innerHTML = sum;
outputTwo.innerHTML = average;
*/






// Snack 2.1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// variabili generali per entrambi i cicli
/*
let sum = 0;
let output = document.querySelector('.output');
*/

// con ciclo for
/*
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt('Inserisci numero'));
    sum = sum += num;
}

output.innerHTML = sum;
*/



// con ciclo while
/*
let i = 0 

while (i < 5) {
    let num = parseInt(prompt('Inserisci numero'));
    i++;
    sum = sum += num;
}

output.innerHTML = sum;
*/






// Snack 2.2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


/*
const num = parseInt(prompt('Inserisci un numero'));
let output = document.querySelector('.output');

if (num % 2 == 0) {
    output.innerHTML = `${num}`;
} else {
    let otherNum = num + 1;
    output.innerHTML = `${otherNum}`; 
}
*/






// Snack 2.3
// Generatore di “nomi cognomi” casuali: 
// prendendo una lista di nomi e una lista di cognomi, 
// Gatsby vuole generare una falsa lista di 3 invitati.

/*
let eleUl = document.querySelector('#list');
const names = ['Gino', 'Sara', 'Marlon', 'Mary', 'Jack'];
const surnames = ['James', 'Bryant', 'Jordan', 'Kidd', 'Durant'];

for (let i = 0; i < 3; i++) {
    let selectName = Math.floor(Math.random() * names.length);
    let selectSurname = Math.floor(Math.random() * surnames.length);
    let randomName = names[selectName];
    let randomSurname = surnames[selectSurname];
    let randomGuest = `${randomName} ${randomSurname}`;

    let eleLi = document.createElement('li');
    eleLi.innerHTML = `Invitato/a alla festa: ${randomGuest}`;
    eleUl.append(eleLi); 
}
*/