//Consegna:

//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//Scomposizione del problema:

//1- SCRIVERE UN PROGRAMMA CHE STAMPI IN CONSOLE DEI NUMERI CHE VANNO DA 1 A 100;
//2- PER I MULTIPLI DI 3 DEVE STAMPARE LA PAROLA FIZZ;
//3- PER I MULTIPLI DI 5 DEVE STAMPARE LA PAROLA BUZZ;
//4- PER I NUMERI CHE SONO MULTIPLI DI ENTRAMBI DEVE STAMPARE LA PAROLA FIZZBUZZ;

const container = document.querySelector('.container');

let element;

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
}
container.innerHTML += element;





