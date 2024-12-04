import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav__container">
      <ul className="nav__links">
        <Link to="/about" className="nav__link">
          <li className="nav__link-about">About</li>
        </Link>
        <Link to="/dex" className="nav__link">
          <li className="nav__link-dex">Pokedex</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
