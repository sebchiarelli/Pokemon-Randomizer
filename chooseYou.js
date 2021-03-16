const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const whichOne = getRandomInt(898);
const picture = document.createElement('img');

const div = document.querySelector("div");
const p = document.querySelectorAll("p");

const moveSet = document.createElement('span');
const talent = getRandomInt(267);
const moveOne = getRandomInt(830);
const moveTwo = getRandomInt(830);
const moveThree = getRandomInt(830);
const moveFour = getRandomInt(830);
const moveStab = getRandomInt(191);
const shiny = getRandomInt(259);


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}

picture.src = `${baseURL}${whichOne}.png`;
div.prepend(picture);


p[0].appendChild(moveSet);
