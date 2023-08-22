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
- console.log
- document.getElementById

*/

// Chiedere il nome dell'utente

const userName = prompt('inserisci il tuo nome');

// Chiedere il cognome dell'utente

const userSurname = prompt('inserisci il tuo cognome');

// Chiedere il colore preferito dell'utente

const userColor = prompt('inserisci il tuo colore preferito');

// Selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
console.log(greetingsElement);

// Stampare il risultato in console

console.log('Ciao' + userName + userSurname + userColor);

// Stampare il risultato in pagina

greetingsElement.innerHTML = 'Ciao ' + userName + userSurname + userColor;

// Formattare il risultato nel seguente modo: nomecognomecolorepreferito23