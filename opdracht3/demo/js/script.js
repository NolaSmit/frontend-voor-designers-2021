var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var main = document.querySelector("main");

//console.log('hi');

//setup JSON lader met XMLHttpRequest
var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();

// EventListener aanmaken, trigger = laden van de pagina
request.addEventListener("load", function () {
    //console.log("data is geladen");
    //console.log(request.response);

    // Loop tot 5
    for (var i = 0; i < 5; i++) {
        // Artikel aanmaken
        var film_artikel = document.createElement("article");
        // Artikel in carousel zetten
        carousel__articles.appendChild(film_artikel);

        // Img aanmaken
        var poster = document.createElement("img");
        // Src van poster aangevem
        poster.src = request.response[i].cover;
        // Poster in artikel zetten / aan de DOM koppelen
        film_artikel.appendChild(poster);
        
        var film_titel = document.createElement("h3");
        film_titel.textContent = request.response[i].title;
        film_artikel.appendChild(film_titel);
        
        var jaar = document.createElement("p");
        jaar.textContent = request.response[i].release_date;
        film_artikel.appendChild(jaar);
        
        var genre = document.createElement("p");
        genre.textContent = request.response[i].genres;
        film_artikel.appendChild(genre);
        
        var plot = document.createElement("p");
        plot.textContent = request.response[i].plot;
        film_artikel.appendChild(plot);

    };

});

// ------- Slider    

// Tutorial die ik heb gebruikt: https://www.youtube.com/watch?v=eywZbJ5PVjg

// code voor key event:
// https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar

var carouselImages = document.querySelector('.carousel__images');

var carouselButtons = document.querySelectorAll('.carousel__button');

var numberOfImages = document.querySelectorAll('.carousel__images article').length;

let imageIndex = 1;

let translateX = 0;


// ------- Simpele Click

//Voor elke button
carouselButtons.forEach(button => {
    // Luister naar klik
    button.addEventListener('click', event => {
        if (event.target.id === 'previous') {
            // Wanneer de index 1 is, dan alleen +90, anders -90 of +90
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 90;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 90;
            }
        }
        // Transformeer de stijl van X van carouselImages met het aantal dat wordt aangegeven in de functie in vw
        carouselImages.style.transform = `translateX(${translateX}vw)`;
    });
});

// ------- Pijltjes 
document.body.onkeyup = function (e) {
    console.log(e.keyCode);
    // Wanneer er op het pijltje naar links wordt geklikt
    if (e.keyCode == 37) {
        //En de image index is minimaal 1, dan +90 op de X as
        if (imageIndex !== 1) {
            imageIndex--;
            translateX += 90;
        }
        //Anders wanner er op het pijltje naar rechts wordt geklikt, -90 op de X as
    } else if (e.keyCode == 39) {
        if (imageIndex !== numberOfImages) {
            imageIndex++;
            translateX -= 90;
        }
    }
    //Transformeer de stijl van X van carouselImages met het aantal dat wordt aangegeven in de functie in vw
    carouselImages.style.transform = `translateX(${translateX}vw)`;
}
