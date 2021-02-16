/*Alle elementen met class .far selecteren*/
var icon = document.querySelectorAll('.far');
console.log (icon);

/*Uit code van front-end blok 2*/
/* elke button laten luisteren naar een klik */
for (i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", addToFavourites);
}

function addToFavourites(event) {
    /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  var clickedHeart = event.target;
    
    clickedHeart.classList.toggle('fas');
}