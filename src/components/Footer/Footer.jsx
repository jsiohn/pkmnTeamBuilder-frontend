import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© John Siordia 2024</p>
      <div className="footer__links">
        <a href="https://www.pokemon.com/us" className="footer__link">
          Pokemon
        </a>
        <a href="https://www.nintendo.com/us/" className="footer__link">
          Nintendo
        </a>
        <a href="https://pokeapi.co/" className="footer__link">
          PokeAPI
        </a>
      </div>
    </footer>
  );
}

export default Footer;
