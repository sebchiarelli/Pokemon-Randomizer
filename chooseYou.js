const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokemonNumber = getRandomInt(898);
const picture = document.createElement('img');
const createA = document.createElement('a');
const div = document.querySelector('div');
const p = document.querySelectorAll('p');
const button = document.querySelectorAll('button');
let type;
let type2;
let langue = 0;
let langueFound = false;

//randomising a number between 1 and max

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
};

// localising the french translation in the JSON

function langueFr(data){
    langue = 0;
    langueFound = false;
    do{
        if(data.names[langue].language.name === "fr"){langueFound = true;}
        else{langue++; }
    } while (langueFound === false);
} 

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

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
.then(res => {return res.json()})
.then(data => {
    type = data.types[0].type.name;
    type2 = data.types[1].type.name;
})
.catch(e =>{console.log(e)})
picture.src = `${baseURL}${pokemonNumber}.png`;
picture.classList.add("pic");
div.prepend(picture);



//Randomising the ability of the choosen pokemon in french among all abilities

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
            updateTalent.classList.add("noDecoration")
            p[0].appendChild(updateTalent);
            updateTalent.innerText = talent + ", ";
        })
        .catch(e =>{
        console.log(e)
        })
    })
    .catch(e =>{
        console.log(e)
    })
})


//Randomising the ability of the choosen pokemon in french among the natural abilities of the pokemon

button[1].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        
        let talentNumber = getRandomInt(4)-1;
        
        do{
            if(data.abilities[talentNumber]);
            else{talentNumber--}
        } while (data.abilities[talentNumber] === undefined);

        let talent = data.abilities[talentNumber].ability.name;

        fetch(`https://pokeapi.co/api/v2/ability/${talent}/`)
        .then(res => {
        
        return res.json()
        })
        .then(data => {
            langueFr(data);
            
            talent = data.names[langue].name;
            const updateTalent = document.createElement("a");
            updateTalent.target = "_blank";
            updateTalent.href = `https://www.pokepedia.fr/${talent}`;
            updateTalent.classList.add("noDecoration")
            p[0].appendChild(updateTalent);
            updateTalent.innerText = talent + ", ";
        })
        .catch(e =>{
        console.log(e)
        })
        
        
    })
    .catch(e =>{
        console.log(e)
    })
})

// choosing attacks among all attacks randomly

button[2].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/move?offset=0&limit=826`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const attackNumber = getRandomInt(826)-1;
        fetch(`https://pokeapi.co/api/v2/move/${attackNumber}/`)
        .then(res => {
        
        return res.json()
        })
        .then(data => {
            langueFr(data);
            const attack = data.names[langue].name;;
            const updateAttack = document.createElement("a");
            updateAttack.target = "_blank";
            updateAttack.href = `https://www.pokepedia.fr/${attack}`;
            updateAttack.classList.add("noDecoration")
            p[1].appendChild(updateAttack);
            updateAttack.innerText = attack + ", ";
        })
        .catch(e =>{
        console.log(e)
        })
    })
    .catch(e =>{
        console.log(e)
    })
});

button[3].addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then(res => {
        
        return res.json()
    })
    .then(data => {
        const attackNumber = getRandomInt(data.moves.length)-1;
        const attackName = data.moves[attackNumber].name;
        fetch(`https://pokeapi.co/api/v2/move/${attackName}/`)
        .then(res => {
        
        return res.json()
        })
        .then(data => {
           
            langueFr(data);
            const attack = data.names[langue].name;;
            const updateAttack = document.createElement("a");
            updateAttack.target = "_blank";
            updateAttack.href = `https://www.pokepedia.fr/${attack}`;
            updateAttack.classList.add("noDecoration")
            p[2].appendChild(updateAttack);
            updateAttack.innerText = attack + ", ";
        })
        .catch(e =>{
        console.log(e)
        })
    })
    .catch(e =>{
        console.log(e)
    })
})