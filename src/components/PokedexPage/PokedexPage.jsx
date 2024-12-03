import "./PokedexPage.css";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokedexPage({ handleSuggestClick, resetPokemon, pokemon }) {
  return (
    <main className="pokedex">
      <button
        type="button"
        className="pokedex__modal-button"
        onClick={handleSuggestClick}
      >
        Suggest a Team
      </button>
      <section className="pokedex__cards">
        <ul className="pokedex__list">
          {pokemon.length > 0 ? (
            pokemon.map((item) => <PokemonCard key={item.id} item={item} />)
          ) : (
            <p className="pokemon__section-title">No Pokemon...</p>
          )}
        </ul>
      </section>
      <button
        type="button"
        className="pokedex__reset-button"
        onClick={resetPokemon}
      >
        Reset
      </button>
    </main>
  );
}

export default PokedexPage;
