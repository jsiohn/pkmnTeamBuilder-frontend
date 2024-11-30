import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <li className="card">
      <h4 className="card__title">{pokemon.name}</h4>
      <img className="card__image" src={pokemon.sprite} alt={pokemon.name} />
    </li>
  );
}

export default PokemonCard;
