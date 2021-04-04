# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Top Movies in een slider
Voor dit project besloot ik opdracht 1 en 2 te combineren. Ik wou een aantal films laten zien op een iPhone scherm (opdracht 1). Ik wou hier meer informatie bij zetten, waardoor de films meer ruimte in beslag namen. Om toch simpel door de films te kunnen gaan heb ik ze in een slider gezet (opdracht 2).

Ik wou eerst een andere film API gebruiken, maar na veel problemen met de afbeeldingen heb ik de film API van Koop Reynders gebruikt.

De demo: https://nolasmit.github.io/frontend-voor-designers-2021/opdracht3/demo/index 

## Interface

**Design Principle 04 - Keep users in control**
De gebruiker is altijd in controle over de slider. De gebruiker kan makkelijk heen en terug en gerust de informatie lezen.

**Design Principle 08 - Provide a natural next step**
Omdat de buttons van de slider opvallen zijn gebruikers sneller geneigd de volgende film ook te bekijken. Zo kunnen ze door de slider heen en de andere films ook bekijken.

**Design Principle 09 - Appearance follows behaviour**
1. Mensen zijn gewend op hun telefoon te scrollen. De informatie staat onder elkaar zodat ze naar beneden kunnen scrollen.
2. De knop ziet er uit als een knop. Wanneer mensen er op klikken gaat de slider verder zoals ze verwachten.

**Design Principle 11 - Strong visual hierachies work best**
De minder belangrijke informatie zoals jaar van uitgave en genre is kleiner en minder fel dan de titel. Zo springt de interessantere informatie meteen in het oog.
Daarnaast is de button een kleur die op alle posters goed opvalt waardoor deze duidelijk blijft.

### UI Events

De slider is te besturen met zowel een click als ook de links en rechts pijltjes op je toetsenbord. Door gebruik te maken van key-input kon ik de pijltjes koppelen aan de code om de slider te laten bewegen.
Daarnaast word de JSOn data ingeladen wanneer de pagina geladen word.

### States

Ik heb de states van de UI stack toegepast door een hover en een active state aan mijn button te koppelen. 

Met de hover state zien ze dat de button klikbaar is. 

Wanneer het laden wat langzamer / de pagina wat slomer is zien ze dat de input verwerkt wordt door de active state van de button die een andere kleur heeft dan de andere states.


## code
Leg de code uit.

```javascript

var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var main = document.querySelector("main");

//setup JSON lader met XMLHttpRequest
var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();

// EventListener aanmaken, trigger = laden van de pagina
request.addEventListener("load", function () {

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
        
        // H3 aanmaken
        var film_titel = document.createElement("h3");
        // Source van text content van h3 aangeven
        film_titel.textContent = request.response[i].title;
        // H3 in artikel zetten / aan de DOM koppelen
        film_artikel.appendChild(film_titel);
        
        // Zelfde als H3 maar dan voor een paragraaf
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
```
