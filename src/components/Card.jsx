/* eslint-disable react/prop-types */
import "../styles/Card.modules.css";
import greece from "../img/greece.jpg";
import dubai from "../img/dubai.jpg";
import istanbul from "../img/istanbul.jpg";


const Card = ({ name, price, img }) => {
  return (
    <div className="card">
      <img className="img-card" src={img === "greece" ? greece : img === "dubai" ? dubai : istanbul} alt="Avatar"/>
      <div className="container">
        <h4 className="title">
          <b>{name}</b>
        </h4>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
