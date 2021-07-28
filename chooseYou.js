const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokemon = getRandomInt(898);
const picture = document.createElement('img');
const div = document.querySelector('div');
const p = document.querySelectorAll('p');
const moveSet = document.createElement('span');
const button = document.querySelectorAll('button');
/*
const moveOne = getRandomInt(826);
const moveTwo = getRandomInt(826);
const moveThree = getRandomInt(826);
const moveFour = getRandomInt(826);
const moveStab = getRandomInt(191);
const shiny = getRandomInt(259);
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}

picture.src = `${baseURL}${pokemon}.png`;
div.prepend(picture);


button[1].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const talent = data.abilities[getRandomInt(3)-1].ability.name;
        const updateTalent = document.createElement("span");
        p[0].appendChild(updateTalent);
        updateTalent.innerText = talent;
    })
    .catch(e =>{
        console.log(e)
    })
})

button[0].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/ability?offset=0&limit=327`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const talentNumber = getRandomInt(328)-1;
        const talent = data.results[talentNumber].name;
        const updateTalent = document.createElement("span");
        p[0].appendChild(updateTalent);
        updateTalent.innerText = talent;
    })
    .catch(e =>{
        console.log(e)
    })
})

button[2].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/move?offset=0&limit=826`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const attackNumber = getRandomInt(826)-1;
        const attack = data.results[attackNumber].name;
        const updateAttack = document.createElement("span");
        p[1].appendChild(updateAttack);
            updateAttack.innerText = attack + " ";
    })
    .catch(e =>{
        console.log(e)
    })
})
