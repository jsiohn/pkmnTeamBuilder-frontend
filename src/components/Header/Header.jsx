import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pokemonLogoSVG.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Pokemon Logo" className="header__logo" />
      </Link>
      <h1 className="header__title">Pokemon Team Builder</h1>
      <Navigation />
    </header>
  );
}

export default Header;
