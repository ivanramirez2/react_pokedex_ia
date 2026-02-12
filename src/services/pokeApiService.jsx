
const BASE_URL = "https://pokeapi.co/api/v2/";

function getPokemons(limit = 20, offset = 0) {
    const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
    return fetch(url).then((response) => response.json());
}

function getPokemonDetails(url) {
    return fetch(url).then((response) => response.json());
}

function getTypes() {
    return fetch(`${BASE_URL}/type`).then((response) => response.json());
}

function getPokemonsByType(typeUrl) {
    return fetch(typeUrl).then((response) => response.json());
}

export { getPokemons, getPokemonDetails, getTypes, getPokemonsByType };