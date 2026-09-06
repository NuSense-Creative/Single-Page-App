// Function to fetch and display Pokémon data
function loadPokemonData(url, containerId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById(containerId);
            container.innerHTML = ''; // Clear the area

            let pokemonInfo = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            `;
            container.innerHTML = pokemonInfo;
        })
        .catch(error => console.error('Error:', error));
}

const explorerSection = document.getElementById('pokemonExplorer');
const explorerLink = document.querySelector('a[href="#pokemonExplorer"]');

function focusExplorerFromHash() {
    if (window.location.hash === '#pokemonExplorer') {
        explorerSection.focus();
    }
}

window.addEventListener('hashchange', focusExplorerFromHash);
explorerLink.addEventListener('click', () => {
    setTimeout(focusExplorerFromHash, 0);
});

// Event listeners for each button
document.getElementById('loadCharizard').addEventListener('click', () => {
    loadPokemonData('https://pokeapi.co/api/v2/pokemon/charizard', 'charizardContainer');
});

document.getElementById('loadPikachu').addEventListener('click', () => {
    loadPokemonData('https://pokeapi.co/api/v2/pokemon/pikachu', 'pikachuContainer');
});

document.getElementById('loadBulbasaur').addEventListener('click', () => {
    loadPokemonData('https://pokeapi.co/api/v2/pokemon/bulbasaur', 'bulbasaurContainer');
});

document.getElementById('loadSquirtle').addEventListener('click', () => {
    loadPokemonData('https://pokeapi.co/api/v2/pokemon/squirtle', 'squirtleContainer');
});

document.getElementById('loadEevee').addEventListener('click', () => {
    loadPokemonData('https://pokeapi.co/api/v2/pokemon/eevee', 'eeveeContainer');
});
