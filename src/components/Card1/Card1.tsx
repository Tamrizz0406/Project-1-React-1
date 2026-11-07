import "./Card1.css";

type Card1Props = {
  icon: string;
  store: string;
};

function Card1({ icon, store }: Card1Props) {
  return (
    <button className="card1">
      <img className="card1__icon" src={icon} alt="" />
      <div className="card1__info">
        <span className="card1__small">Download on</span>
        <span className="card1__name">{store}</span>
      </div>
    </button>
  );
}

export default Card1;