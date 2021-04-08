const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokemon = getRandomInt(898);
const picture = document.createElement('img');

const div = document.querySelector("div");
const p = document.querySelectorAll("p");

const moveSet = document.createElement('span');
//const talent = getRandomInt(267);
const moveOne = getRandomInt(830);
const moveTwo = getRandomInt(830);
const moveThree = getRandomInt(830);
const moveFour = getRandomInt(830);
const moveStab = getRandomInt(191);
const shiny = getRandomInt(259);
//const updateTalent = () => {document.createElement("p");}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}

picture.src = `${baseURL}${pokemon}.png`;
div.prepend(picture);




fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(res => {
    
    return res.json()
})
.then(data => {
    console.log("now the data", data);
    console.log(data.abilities[0].ability.name);
    const talent = data.abilities[0].ability.name;
    console.log(talent);
    const updateTalent = document.createElement("span");
    p[0].appendChild(updateTalent);
    updateTalent.innerText = talent;
})
.catch(e =>{
    console.log(e)
})

