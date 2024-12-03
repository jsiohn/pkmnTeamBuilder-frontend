import "./PokemonCard.css";

function PokemonCard({ item, handleCardClick }) {
  // console.log(item); // testing
  return (
    <li className="card">
      <h4 className="card__title">{item.name}</h4>
      <img
        className="card__image"
        src={item.sprites.front_default}
        alt={item.name}
        onClick={handleCardClick}
      />
    </li>
  );
}

export default PokemonCard;
