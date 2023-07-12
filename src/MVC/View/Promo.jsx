import '../../App.css'
import yacht from "../../assets/yacht.mp4";
import { useNavigate } from "react-router-dom";

function Promo() {

  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("CLICK")
    navigate("/home");
  }

  return (
    <>
      <div className="flex">
        <div className="video-overlay">
          <video autoPlay muted loop id="myVideo">
            <source src={yacht} type="video/mp4" />
          </video>
        </div>
        <button onClick={clickHandler}>
          אני רוצה לקבל הצעת מחיר לחופשה שלי
        </button>
      </div>
    </>
  );
}

export default Promo;
