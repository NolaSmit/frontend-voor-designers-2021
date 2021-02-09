/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

var hearts = document.querySelector("#heart");

var icon = document.querySelector('i.far fa-heart');

function addToFavourites() {
    icon.classList.toggle('.fas fa-heart');
}

hearts.addEventListener('click', addToFavourites);