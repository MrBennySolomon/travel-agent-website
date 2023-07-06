import "../../styles/Home.modules.css";
import yacht from "../../assets/yacht.mp4";
import MainNavigation from "../../components/MainNavigation";

const Home = () => {
  return (
    <>
      <MainNavigation/>
      <div className="video-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src={yacht} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home