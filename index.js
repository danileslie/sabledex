let getPokemon = document.querySelector('#getPokemon');
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
            let letterUppercase = data.name.charAt(0).toUpperCase();
            let remainingName = data.name.slice(1);
            let nameUppercase = letterUppercase + remainingName;
            pokemonName.textContent = nameUppercase;
            pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

            pokemonType1.textContent = data.types[0].type.name;
            pokemonType1.className = data.types[0].type.name;

            if (data.types[1]) {
                pokemonType2.style.display='block';
                pokemonType2.textContent = data.types[1].type.name;
                pokemonType2.className = `${data.types[1].type.name}`
               
            } else {
                pokemonType2.style.display='none'; 
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function clearData() {
    pokemonType2.textContent = '';
    pokemonType2.style.display='none';
}
