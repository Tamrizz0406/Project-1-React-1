import "./Card.css";
import icon from "../../assets/icn resize.png";

type CardProps = {title: string, text?: string};

function Card({ title, text = "the quick fox jumps over the lazy dog" }: CardProps) {
  return (
    <div className="card">
      <img className="card__icon" src={icon} alt="" />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
}

export default Card;