/* CHIEDERE ALL'UTENTE I DATI E MEMORIZZARLI NELLE VARIABILI */
let nome = prompt ("Qual\'è il tuo nome ?");
let cognome = prompt ("Qual\'è il tuo cognome ?");
let colore = prompt ("Qual\è il tuo colore preferito ?");

/* SOMMARE LE INFORMAZIONI E SCRIVERLE NELLA PAGINA HTML */
let yourPassword = nome + cognome + colore + "21";
document.getElementById("password").innerHTML = yourPassword