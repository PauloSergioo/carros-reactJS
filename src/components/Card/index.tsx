import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="card">
    <div>
      <img src={carImg} alt="Car" />
    </div>
    <div>
        <h2>Audi Supra TT</h2>
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi
    </div>
    <div>Comprar</div>
    </div>

    
  );
}
