import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function SuggestTeamModal({ isOpen, handleSuggest, onClose }) {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  const handleType1Change = (e) => {
    setType1(e.target.value);
  };

  const handleType2Change = (e) => {
    setType2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuggest({ type1, type2 });
  };

  return (
    <ModalWithForm
      title="Suggest a Team"
      buttonText="Go!"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="type-1" className="modal__label">
        Type 1
      </label>
      <select
        id="type-1"
        className="modal__input"
        name="type-1"
        value={type1}
        onChange={handleType1Change}
      >
        <option value="">None</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="stellar">Stellar</option>
        <option value="shadow">Shadow</option>
        <option value="unknown">Unknown</option>
      </select>
      <label htmlFor="type-2" className="modal__label">
        Type 2
      </label>
      <select
        id="type-2"
        className="modal__input"
        name="type-2"
        value={type2}
        onChange={handleType2Change}
      >
        <option value="">None</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="stellar">Stellar</option>
        <option value="shadow">Shadow</option>
        <option value="unknown">Unknown</option>
      </select>
    </ModalWithForm>
  );
}

export default SuggestTeamModal;
