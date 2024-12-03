import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getPokemon, pokemonData } from "../../utils/ThirdPartyApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PokedexPage from "../PokedexPage/PokedexPage";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SuggestTeamModal from "../SuggestTeamModal/SuggestTeamModal";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [initialPokemon, setInitialPokemon] = useState([]);

  function handleSuggestClick() {
    setActiveModal("suggest");
  }

  function closeActiveModal() {
    setActiveModal("");
  }

  function resetPokemon() {
    setPokemon(initialPokemon);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleSuggest({ type1, type2 }) {
    const filteredPokemon = pokemon.filter(
      (item) =>
        item.types.some((typeObj) => typeObj.type.name === type1) ||
        item.types.some((typeObj) => typeObj.type.name === type2)
    );
    const shuffledPokemon = shuffleArray(filteredPokemon).slice(0, 6);
    setPokemon(shuffledPokemon);
    closeActiveModal();
  }

  useEffect(() => {
    getPokemon()
      .then((data) => pokemonData(data))
      .then((pokemonInfo) => {
        setPokemon(pokemonInfo);
        setInitialPokemon(pokemonInfo);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/dex"
            element={
              isLoading ? (
                <Preloader />
              ) : (
                <PokedexPage
                  handleSuggestClick={handleSuggestClick}
                  resetPokemon={resetPokemon}
                  pokemon={pokemon}
                />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
      {activeModal === "suggest" && (
        <SuggestTeamModal
          isOpen={activeModal === "suggest"}
          onClose={closeActiveModal}
          handleSuggest={handleSuggest}
        />
      )}
    </div>
  );
}

export default App;
