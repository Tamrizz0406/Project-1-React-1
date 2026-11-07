import "./Section.css";
import Card from "../Card/Card";

function Section() {
  return (
    <section className="sec2">
      <h2 className="sec2__title">Better Strategy With <br /> Quality Business</h2>
      <p className="sec2__subtitle">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="sec2__cards">
        <Card title="Investment Trading" />
        <Card title="Support On Raising Funds" />
        <Card title="Financial Analysis" />
        <Card title="Taxation Planning" />
        <Card title="Save money and time" />
        <Card title="Outsourced Consulting Business" />
      </div>
    </section>
  );
}

export default Section;