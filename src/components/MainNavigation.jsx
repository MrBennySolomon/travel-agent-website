import "../styles/menu.css";
import "../styles/style.css";
import "../styles/MainNavigation.modules.css";

import { Link } from "react-router-dom";

import { useRef } from "react";

import logo from "../img/logo.gif";

const MainNavigation = () => {
  const inputRef = useRef();

  return (
    <>
      <div className="menu-wrap">
        <input ref={inputRef} type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="menu">
          <div>
            <div>
              <ul className="flex-container">
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/products">Products</Link>
                </li>
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/courses">Courses</Link>
                </li>
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/live">Go Live</Link>
                </li>
                <li onClick={() => (inputRef.current.checked = false)}>
                  <Link to="/coupons">Coupons</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="fullscreen-navbar">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Online Courses</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/live">Go Live</Link>
          </li>
          <li>
            <Link to="/coupons">Coupons</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
