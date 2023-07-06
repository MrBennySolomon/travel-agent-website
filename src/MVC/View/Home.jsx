import "../../styles/Home.modules.css";
import yacht from "../../assets/yacht.mp4";
import MainNavigation from "../../components/MainNavigation";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <div className="flex">
        <Card
          name="דילים ליוון"
          price="החל מ-700₪ לאדם"
          src="../src/img/greece.jpg"
        />
        <Card
          name="דילים לדובאי"
          price="החל מ-1000₪ לאדם"
          src="../src/img/dubai.jpg"
        />
        <Card
          name="דילים לאיסטנבול"
          price="החל מ-1100₪ לאדם"
          src="../src/img/istanbul.jpg"
        />
        <div className="video-overlay">
          <video autoPlay muted loop id="myVideo">
            <source src={yacht} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Home