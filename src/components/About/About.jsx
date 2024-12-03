import "./About.css";
import selfie from "../../assets/selfPic.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__author-pic-container">
        <img
          src={selfie}
          alt="author picture"
          className="about__author-picture"
        />
      </div>
      <div className="about__text-container">
        <h3 className="about__title">Hi, I'm John!</h3>
        <p className="about__text">
          My name is John and I'm the author of this here site. I am a husband,
          father of three, and an aspiring full-stack engineer. My experience is
          primarily in food service and pest control but my passion is in
          technology and coding. I have tried to get an education and make a
          career change through university programs before settling on
          TripleTen's Software Engineering Bootcamp which has really worked for
          me. This is where I learned to make everything you see here.
        </p>

        <h3 className="about__title">The App</h3>
        <p className="about__text">
          This web app is made using the React framework, which incorporates
          HTML, CSS, and JavaScript. The idea came from a wish to see something
          that will take some of the guesswork out of creating a team for the
          Pokemon games. It is the final project of TripleTen's program and I am
          excited to create and share it. The app will make API calls to a
          third-party API for information, PokeAPI, and their site is linked in
          the footer. I have also linked the homepages for Nintendo and Pokemon
          in the footer as well for those who may not be familiar when them and
          their great work.
        </p>
      </div>
    </div>
  );
}

export default About;
