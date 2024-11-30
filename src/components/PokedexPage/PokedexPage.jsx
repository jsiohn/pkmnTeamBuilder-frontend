import "./PokedexPage.css";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokedexPage({ handleSuggestClick, pokemon }) {
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
        {/* <p className="pokedex__section">test test test test</p> */}
        {/* <ul className="pokedex__list">
          <PokemonCard key={pokemon._id} item={pokemon} />
        </ul> */}
      </section>
    </main>
  );
}

export default PokedexPage;
