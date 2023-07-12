import '../../App.css'
import yacht from "../../assets/yacht.mp4";
import { useNavigate } from "react-router-dom";

function Promo() {

  const navigate = useNavigate();

  return (
    <>
      <div className="video-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src={yacht} type="video/mp4" />
        </video>
        <button onClick={ () => navigate("/home")}>
          אני רוצה לקבל הצעת מחיר לחופשה שלי
        </button>
      </div>
    </>
  );
}

export default Promo;
