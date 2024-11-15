//Crear constantes con los elementos de la pagina
const pokemonName = document.getElementById('pokemon-name');
const pokemonDescription = document.getElementById('pokemon-description');
const pokemonImage = document.getElementById('pokemon-image');
const randomBtn = document.getElementById('random-btn');

randomBtn.addEventListener('click', fetchRandomPokemon);

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // ID entre 1 y 898
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();

        // Establecer los datos del Pokémon
        pokemonName.textContent = `Nombre: ${data.name}`;
        pokemonImage.src = data.sprites.front_default;
        
        // Obtener datos del pokemon (especie) para obtener la descripción
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        
        // Obtener la descripción en español (es)
        const description = speciesData.flavor_text_entries.find(entry => entry.language.name === "es");
        pokemonDescription.textContent = `Descripcion: ${description ? description.flavor_text : "No hay descripción disponible."}`;
    } catch (error) {
        console.error("Error al obtener los datos del Pokémon:", error);
        pokemonDescription.textContent = "No se pudo cargar los datos del Pokémon.";
    }
}

document.addEventListener('DOMContentLoaded', fetchRandomPokemon);
