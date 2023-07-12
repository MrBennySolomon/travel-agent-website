/* eslint-disable no-unused-vars */
import "../../styles/Home.modules.css";
import yacht from "../../assets/yacht.mp4";
import { useState } from "react";
// import MainNavigation from "../../components/MainNavigation";
// import Card from "../../components/Card";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingGreet, setIsShowingGreet] = useState(false);
  const [greet, setIsGreet] = useState("תודה, נחזור אליכם בהקדם עם הצעת המחיר");

  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [childrenAge, setChildrenAge] = useState("");
  const [rooms, setRooms] = useState("");

  const clickHandler = () => {
    if (destination.length > 0 && name.length > 0 && phone >= 0 && email.length > 5 && adults > 0 && rooms > 0) {
      setIsLoading(true);

      fetch("https://64aeed80c85640541d4dec17.mockapi.io/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: destination,
          name: name,
          phone: phone,
          email: email,
          adults: adults,
          children: children,
          childrenAge: childrenAge,
          rooms: rooms
        })
      }).then(() => {
        setIsLoading(false);
        setIsShowingGreet(true);
      });
    }
  };

  return (
    <>
      <div className="video-overlay">
        <video autoPlay muted loop id="myVideo">
          <source src={yacht} type="video/mp4" />
        </video>
      </div>
      {!isLoading && !isShowingGreet && (
        <div className="flex">
          <input
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="שם היעד"
            required
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="שם מלא"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="טלפון"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="אימייל"
            required
          />
          <input
            onChange={(e) => setAdults(e.target.value)}
            type="number"
            placeholder="מספר נוסעים מבוגרים"
            required
          />
          <input
            onChange={(e) => setChildren(e.target.value)}
            type="number"
            placeholder="מספר נוסעים ילדים"
            required
          />
          <input
            onChange={(e) => setChildrenAge(e.target.value)}
            type="text"
            placeholder="גיל הילדים"
            required
          />
          <input
            onChange={(e) => setRooms(e.target.value)}
            type="number"
            placeholder="כמות חדרים"
            required
          />
          <button onClick={clickHandler}>תחזרו אליי בבקשה עם הצעת מחיר</button>

          {/* <MainNavigation />
        <div className="flex">
          <Card
            name="דילים ליוון"
            price="החל מ-700₪ לאדם"
            img="greece"
          />
          <Card
            name="דילים לדובאי"
            price="החל מ-1000₪ לאדם"
            img="dubai"
          />
          <Card
            name="דילים לאיסטנבול"
            price="החל מ-1100₪ לאדם"
            img="istanbul"
          />
          <div className="video-overlay">
            <video autoPlay muted loop id="myVideo">
              <source src={yacht} type="video/mp4" />
            </video>
          </div>
        </div> */}
        </div>
      )}
      {isLoading && (
        <div className="flex">
          <div className="loader"></div>
        </div>
      )}
      {isShowingGreet && (
        <div className="flex">
          <h1 className="thanks">{greet}</h1>
        </div>
      )}
    </>
  );
}

export default Home