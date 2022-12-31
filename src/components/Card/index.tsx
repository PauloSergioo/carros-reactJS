import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="card mb20">
      <div className="title-card">
        <img src={carImg} alt="Car" />
        <h2>Audi Supra TT</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <div className="aligned-card">
        <div className="buy-button">Comprar</div>
      </div>
    </div>
  );
}
