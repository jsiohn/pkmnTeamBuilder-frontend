import "./App.css";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
// import PokedexPage from "../PokedexPage/PokedexPage";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import PokemonModal from "../PokemonModal/PokemonModal";
// import SuggestTeamModal from "../SuggestTeamModal/SuggestTeamModal";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeModal, setActiveModal] = useState("");

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/dex" element={<PokedexPage />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
      {/* <PokemonModal />
      <SuggestTeamModal /> */}
    </div>
  );
}

export default App;
