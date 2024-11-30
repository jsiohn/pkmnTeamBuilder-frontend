import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { baseUrl, getPokemon, pokemonData } from "../../utils/ThirdPartyApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PokedexPage from "../PokedexPage/PokedexPage";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import PokemonModal from "../PokemonModal/PokemonModal";
import SuggestTeamModal from "../SuggestTeamModal/SuggestTeamModal";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [pokemon, setPokemon] = useState([]);

  function handleSuggestClick() {
    setActiveModal("suggest");
  }

  function closeActiveModal() {
    setActiveModal("");
  }

  useEffect(() => {
    getPokemon()
      .then((data) => {
        console.log(data);
        const pokemonInfo = pokemonData(data);
        setPokemon(pokemonInfo);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   getPokemon()
  //     .then((data) => {
  //       const pokemon = data;
  //       setPokemon(pokemon);
  //       console.log(pokemon); //debugging
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/dex"
            element={
              <PokedexPage
                handleSuggestClick={handleSuggestClick}
                pokemon={pokemon}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
      {activeModal === "suggest" && (
        <SuggestTeamModal
          isOpen={activeModal === "suggest"}
          onClose={closeActiveModal}
        />
      )}

      {/* <PokemonModal /> */}
    </div>
  );
}

export default App;
