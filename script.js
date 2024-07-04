const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
}
const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");



let getPokeData = () => {
    let id = Math.floor(Math.random() * 150 +1);
    console.log(id)
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => generateCard(data));
    

}

let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];

    card.innerHTML = `
    <div class="innercard">
    <div id="header">
        <p id="pokemon-name">${pokeName}</p>
        <p id="pokemon-hp">${hp} HP</p>
        <div id="type">
            <img src="images/pokemon_type_icons___vector_by_lugia_sea_dedsu40/Pokemon_Type_Icon_Fire.png">
        </div>
    </div>
    <div id="pikture"></div>
    <div id="pokemonImage">
    <img src="${imgSrc}">
    </div>
    <div id="firstedition">
        <div id="golden-banner">
        ${data.types[0].type.name} and ${data.types[1].type.name} Pokemon. Height: ${data.height}
        </div>
    </div>
    <div id="Power">
        <span id="PowerText">Pokemon Power:</span>
        <span id="PowerValue">${data.moves[1].move.name}</span>
    </div>
    <span id="PowerInfo">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </span>
    <div id="Ruler"></div>
    <div id="AttackName"> ${data.moves[0].move.name}
        <div id="AttackValue"> ${statAttack} </div>
    </div>
    <div id="Ruler2"></div>
    <span id="Defense"> Defense ${statDefense}</span>
    <span id="Speed"> Speed ${statSpeed}</span>
    <span id="Effect">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </span>
</div>`

styleCard(themeColor)
}

let styleCard = (color) => {
    innercard.style.background
}
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);