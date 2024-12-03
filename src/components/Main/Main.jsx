import "./Main.css";

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Welcome, to the Pokemon Team Builder!</h2>
      <p className="main__text">
        This little web app has two functions: it is a full Pokedex and can also
        suggest Pokemon to put on your team based on specifications set by you,
        the user. Head to the Pokedex page and you'll see the full Pokedex,
        thanks to PokeAPI! Hit the "Suggest a Team" button to bring up a form
        that, when filled out, will only show Pokemon that fit your
        specifications; basically filtering the full Pokedex.
      </p>
      <h2 className="main__title">Pages</h2>
      <p className="main__text">
        The "About" button will show you a little bit about me, the author, in
        case you're curious. The "Pokedex" button takes you to the 1st Gen
        Pokedex (the original 151) so that you can check out all the Pokemon
        available to you. The reason for only using the 1st Generation is
        resources and time. Perhaps I will flesh out the app to include the full
        Pokedex soon!
      </p>
      <h2 className="main__title">But, why?</h2>
      <p className="main__text">
        Well, for those of us who have grown up spending time in the world of
        Pokemon, we usually like to know more about these little monsters. So I
        decided to make my own take on a Pokedex and team builder that takes
        some of the guesswork out. Other sites may require that you already know
        the ins and outs of Pokemon but if you just want to see a list of
        Pokemon based on your likes, that's what I aim to do. Can't have too
        many Pokemon-themed resources right?
      </p>
    </main>
  );
}

export default Main;
