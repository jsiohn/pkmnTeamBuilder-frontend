const baseUrl = "https://pokeapi.co/api/v2/";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getPokemon() {
  return fetch(`${baseUrl}/pokemon/?limit=151`, {
    method: "GET",
  }).then(checkResponse);
}

function pokemonData(data) {
  data.results.map((pokemonItem) => {
    console.log(pokemonItem); // debugging
    return fetch(`${baseUrl}/pokemon/${pokemonItem.name}`);
  });
}

export { baseUrl, getPokemon, pokemonData };
