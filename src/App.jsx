import './App.css'
import yacht from "./assets/yacht.mp4";

function App() {

  return (
    <>
      <div className="video-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src={yacht} type="video/mp4" />
        </video>
        <button>
          לחץ להתחיל את החופשה שלך
        </button>
      </div>
    </>
  );
}

export default App
