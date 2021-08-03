const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokemonNumber = getRandomInt(898);
const picture = document.createElement('img');
const createA = document.createElement('a');
const div = document.querySelector('div');
const p = document.querySelectorAll('p');
const button = document.querySelectorAll('button');

let langue = 0;
let langueFound = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
};

function langueFr(data){
    langue = 0;
    langueFound = false;
    do{
        if(data.names[langue].language.name === "fr"){langueFound = true;}
        else{langue++; }
    } while (langueFound === false);
} 
/*
const moveSet = document.createElement('span');
const moveOne = getRandomInt(826);
const moveTwo = getRandomInt(826);
const moveThree = getRandomInt(826);
const moveFour = getRandomInt(826);
const moveStab = getRandomInt(191);
const shiny = getRandomInt(259);
*/

//Name of the random pokemon in french
const pokemonName = fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`)
.then(res => {return res.json()})
.then(data => {
    langueFr(data);
    createA.target = "_blank";
    createA.href = `https://www.pokepedia.fr/${data.names[langue].name}`;
    createA.innerHTML = data.names[langue].name.toUpperCase()
})
.catch(e =>{console.log(e)});

div.prepend(createA);


picture.src = `${baseURL}${pokemonNumber}.png`;
picture.classList.add("pic");
div.prepend(picture);



button[1].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
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
    fetch(`https://pokeapi.co/api/v2/ability?offset=0&limit=267`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const talentNumber = getRandomInt(267)-1;
        
        fetch(`https://pokeapi.co/api/v2/ability/${talentNumber}/`)
        .then(res => {
        
        return res.json()
        })
        .then(data => {
            
            langueFr(data);
            const talent = data.names[langue].name;
            const updateTalent = document.createElement("a");
            updateTalent.target = "_blank";
            updateTalent.href = `https://www.pokepedia.fr/${talent}`;
            p[0].appendChild(updateTalent);
            updateTalent.innerText = talent + " ";
        })
        .catch(e =>{
        console.log(e)
        })
        
        //const talent = data.results[talentNumber].name;
       
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
