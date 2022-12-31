import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="ct-card ct-mb20">
      <div className="ct-title-card">
        <img src={carImg} alt="Car" />
        <h2>Audi Supra TT</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <div className="ct-aligned-card">
        <div className="ct-buy-button">Comprar</div>
      </div>
    </div>
  );
}
