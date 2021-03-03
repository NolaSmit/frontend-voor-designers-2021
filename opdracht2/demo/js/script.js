/*
Tutorial die ik heb gebruikt: https://www.youtube.com/watch?v=eywZbJ5PVjg

code voor key event:
https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
*/

var carouselImages = document.querySelector('.carousel__images');

var carouselButtons = document.querySelectorAll('.carousel__button');

var numberOfImages = document.querySelectorAll('.carousel__images img').length;

let imageIndex = 1;

let translateX = 0;


/*----- Simpele Click -------*/

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        /* wanneer de index 1 is dan alleen +300, anders -300 of +300*/
        if (event.target.id === 'previous') {
        if (imageIndex !== 1) {
            imageIndex--;
            translateX += 300;
        }
    } else {
        if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
        }
     }
        
    carouselImages.style.transform = `translateX(${translateX}px)`;    
    });
});


/*----- Pijl naar rechts -------*/

document.body.onkeyup = function(e){
    if(e.keyCode == 39){
    if (event.target.id === 'previous') {
        if (imageIndex !== 1) {
            imageIndex--;
            translateX += 300;
        }
    } else {
        if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
        }
     }
        
    carouselImages.style.transform = `translateX(${translateX}px)`;     }
}

