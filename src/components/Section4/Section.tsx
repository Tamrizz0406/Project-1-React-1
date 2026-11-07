import "./Section.css";
import Card1 from "../Card1/Card1";

import apple from "../../assets/icn svg.png";
import google from "../../assets/icn svg copy.png";
import amazon from "../../assets/Vector.png";
import windows from "../../assets/Vector copy.png";

function Section5() {
  return (
    <section className="download">
      <h2 className="download__title">Download Our App</h2>
      <p className="download__subtitle">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="download__buttons">
        <Card1 icon={apple} store="App Store" />
        <Card1 icon={google} store="Google Play" />
        <Card1 icon={amazon} store="Amazon.com" />
        <Card1 icon={windows} store="Windows Store" />
      </div>
    </section>
  );
}

export default Section5;