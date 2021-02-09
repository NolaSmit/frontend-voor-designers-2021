var hearts = document.querySelector("#heart");
console.log(hearts);

var icon = document.querySelector('.far');
console.log (icon);

function addToFavourites() {
    icon.classList.toggle('fas');
}

hearts.addEventListener('click', addToFavourites);