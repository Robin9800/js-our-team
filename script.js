/*Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie
per stampare la relativa card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card 
di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.*/

//Creo un array di oggetti
const nineTitans = [
    {
        pic: "img/Attack Titan.jpg",
        nameMember: "Attack Titan",
        shifter: "Eren Jeager"
    },
    {
        pic: "img/Armored Titan.jpg",
        nameMember: "Armored Titan",
        shifter: "Reiner Braun"
    },
    {
        pic: "img/Beast Titan.jpg",
        nameMember: "Beast Titan",
        shifter: "Zeke Jeager"
    },
    {
        pic: "img/Colossal Titan.jpg",
        nameMember: "Colossal Titan",
        shifter: "Armin Arlert"
    },
    {
        pic: "img/Female Titan.jpg",
        nameMember: "Female Titan",
        shifter: "Annie Leonhart"
    },
    {
        pic: "img/Jaw Titan.jpg",
        nameMember: "Jaw Titan",
        shifter: "Porco Galliard"
    },
];

//Creo una funzione per creare le carte con i personaggi
function creazioneTitan(titan) {

    // richiamo il contenitore dove andranno inserite le carte CONTAINER
    const container = document.querySelector('.team-container');
    // creo l'elemento carta 
    const contenitoreCarte = document.createElement('div');
    // aggiungo all'elemendo team-card il contenitore delle card 
    container.appendChild(containerCard);


    // aggiungo la classe all'elemento carta 
    contenitoreCarte.classList.add('team-card');
    // creo il contenitore dell'immagine 
    const contenitoreImmagine = document.createElement('div');
    // aggiungo una classe all'elemento contenitore immagine 
    contenitoreImmagine.classList.add('card-image');
    // appendo l'elemento al div team card 
    contenitoreCarte.appendChild(contenitoreImmagine);
    // creo elemento immagine 
    const elementoImmagine = document.createElement('img');
    // Nel div carta appendo l'elemento immagine 
    contenitoreImmagine.appendChild(elementoImmagine);
    // all'elemento immagine vado a inserire l'img dell'oggetto
    elementoImmagine.src = titan.immagine;
    // Creo il div che conterrà tag h3 e tag p 
    const contenitoreTesto = document.createElement('div');
    // all'elemento div aggiungo una classe
    contenitoreTesto.classList.add('card-text');
    // al contenitore Card appendo l'elemento div testo creato 
    contenitoreCarte.appendChild(contenitoreTesto);
    // creo un nuovo elemento che sarà il nome della carta 
    const nomePersonaggio = document.createElement('h3');
    // appendo l'elemendo creato al contenitore testo 
    contenitoreTesto.appendChild(nomePersonaggio);
    // all'elemento nomePersonaggio vado ad inserire il nome dell'oggetto 
    nomePersonaggio.innerText = titan.nome;
    // creo un nuovo elemento che sarà il ruolo della carta 
    const ruoloPersonaggio = document.createElement('p');
    // appendo l'elemendo creato al contenitore testo
    contenitoreTesto.appendChild(ruoloPersonaggio);
    // all'elemento ruoloPersonaggio vado ad inserire il ruolo dell'oggetto 
    titanShifter.innerText = titan.shifter;

}

for (let i = 0; i < nineTitans.length; i++) {

    const personaggio = nineTitans[i];

    creazioneTitan(personaggio);
}


