/*
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23.
*/

/*

Strumenti.

- prompt
- let userName
- let userSurname
- let userColor
- let userDate
- console.log
- document.getElementById

*/

// Chiedere il nome dell'utente

const userName = prompt('inserisci il tuo nome');

// Chiedere il cognome dell'utente

const userSurname = prompt('inserisci il tuo cognome');

// Chiedere il colore preferito dell'utente

const userColor = prompt('inserisci il tuo colore preferito');

// Chiedere l'età dell'utente

const userAge = prompt('inserisci la tua età');

// Selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
console.log(greetingsElement);

const passwordElement = document.getElementById('password');
console.log(passwordElement);

// Recuperare l'anno corrente con una const

const currentYear = 2023;

// Sottrarre all'anno corrente gli anni dell'utente

const birthYear = currentYear - Number(userAge);

// Stampare il risultato in console

console.log('Ciao' + userName + userSurname + 'sei nato il' + birthYear + 'preferisci il colore' + userColor + 'ed hai' + userAge + 'anni');

console.log('La tua password è' + birthYear);

// Stampare il risultato in pagina
// Formattare il risultato nel seguente modo: nomecognomecolorepreferito23

greetingsElement.innerHTML = 'Ciao' + userName + userSurname + 'sei nato il' + birthYear + 'preferisci il colore' + userColor + 'ed hai' + userAge + 'anni';

passwordElement.innerHTML = 'La tua password è' + birthYear;