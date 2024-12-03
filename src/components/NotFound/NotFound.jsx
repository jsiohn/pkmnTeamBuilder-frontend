import "./NotFound.css";
import sadPika from "../../assets/sadPikachu.webp";

function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__title">Page Not Found</p>
      <p className="notfound__text">
        Sorry, the page you are looking for cannot be found.
      </p>
      <img src={sadPika} alt="sad pikachu" className="notfound__image" />
    </div>
  );
}

export default NotFound;
