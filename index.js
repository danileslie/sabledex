let getPokemon = document.querySelector('#getpokemon');
let pokemonName = document.querySelector('#pokemonName');
let pokemonType1 = document.querySelector('#pokemonType1');
let pokemonType2 = document.querySelector('#pokemonType2');
let pokemonImage = document.querySelector('#pokemonImage');




getPokemon.addEventListener('click', pokemonInformation)

function pokemonInformation() {

    let pokemonId = document.querySelector('#pokemonId').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            pokemonName.textContent = data.name;
            pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

            if (!data.types[1]) {
                pokemonType2.style.display = 'none';
            } else {
                pokemonType1.textContent = data.types[0].type.name;
                pokemonType1.className = `${data.types[0].type.name}`
                pokemonType2.textContent = data.types[1].type.name;
                pokemonType2.className = `${data.types[1].type.name}`
            }



        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function clearData() {
    pokemonType2.textContent = '';
}
