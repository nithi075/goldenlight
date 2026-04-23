import "./About.css";
import mainImg from "../../assets/about1.png";
import smallImg from "../../assets/about2.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      
      <div className="about-content">
        <span className="sub-text">Our Philosophy</span>
        <h2>Capturing the <br /> Soul of the Moment</h2>
        
        <p>
          We believe that photography is not just about poses and lighting; 
          it’s about the silent glances, the unbridled laughter, and the 
          timeless connection between two souls. With a keen eye for detail, 
          we turn your fleeting moments into eternal art.
        </p>

        <button className="about-btn">Discover Our Story</button>
      </div>

      <div className="about-images">
        {/* <div className="main-img-wrapper">
          <img
            src={mainImg}
            alt="Wedding portrait"
            className="main-img"
          />
        </div> */}

        {/* Small overlapping image - placed bottom left for balance */}
        {/* <img
          src={smallImg}
          alt="Candid moment"
          className="small-img"
        /> */}

        {/* Experience badge */}
        {/* <div className="experience-badge">
          <h3>08</h3>
          <p>YEARS OF <br /> ARTISTRY</p>
        </div> */}
      </div>

    </section>
  );
}