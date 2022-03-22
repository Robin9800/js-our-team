/*Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie
per stampare la relativa card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card 
di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.*/

//Creo un array di oggetti
const nineTitans = [
    {
        img: "img/Attack Titan.jpg",
        nameMember: "Attack Titan",
        shifter: "Eren Jeager"
    },
    {
        img: "img/Armored Titan.jpg",
        nameMember: "Armored Titan",
        shifter: "Reiner Braun"
    },
    {
        img: "img/Beast Titan.jpg",
        nameMember: "Beast Titan",
        shifter: "Zeke Jeager"
    },
    {
        img: "img/Colossal Titan.jpg",
        nameMember: "Colossal Titan",
        shifter: "Armin Arlert"
    },
    {
        img: "img/Female Titan.jpg",
        nameMember: "Female Titan",
        shifter: "Annie Leonhart"
    },
    {
        img: "img/Jaw Titan.jpg",
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
    // AGGIUNGO LA CLASSE CONTENITORE IMG DENTRO IL CONTENITORE GENERALE
    contenitoreImmagine.appendChild(contenitoreCarte);
    // creo elemento immagine 
    let image = document.createElement('img');
    // Nel div carta appendo l'elemento immagine 
    contenitoreCarte.appendChild(image);
    // all'elemento immagine vado a inserire l'img dell'oggetto
    image.src = titan.img;
    // Creo il div che conterrà tag h3 e tag p 
    const containerText = document.createElement('div');
    // all'elemento div aggiungo una classe
    containerText.classList.add('card-text');
    // al contenitore Card appendo l'elemento div testo creato 
    containerCard.appendChild(containerText);
    // creo un nuovo elemento che sarà il nome della carta 
    const titanName = document.createElement('h3');
    // appendo l'elemendo creato al contenitore testo 
    containerText.appendChild(titanName);
    // all'elemento titanName vado ad inserire il nome (nameMember) dell'oggetto 
    titanName.innerText = titan.nameMember;
    // creo un nuovo elemento che sarà lo shifter della carta 
    const shifter = document.createElement('p');
    // appendo l'elemendo creato al contenitore testo
    containerText.appendChild(shifter);
    // all'elemento shifter vado ad inserire lo shifter dell'oggetto 
    shifter.innerText = titan.shifter;

}

for (let i = 0; i < nineTitans.length; i++) {

    const personaggio = nineTitans[i];

    creazioneTitan(personaggio);
}


