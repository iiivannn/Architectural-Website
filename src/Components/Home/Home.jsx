import "../../app.css";
import "./home.css";

import video from "../../ReactAssets/archi-vid.mp4";
import logo from "../../ReactAssets/city.png";
import art from "../../ReactAssets/state-of-art.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      duration: 1500,
      delay: 700,
    });

    sr.reveal(".image");
    sr.reveal("p", { delay: 800, interval: 1000, origin: "bottom" });
  });
  return (
    <div>
      <div className="video-bg">
        <video src={video} autoPlay muted loop></video>
      </div>

      <div className="title container">
        <h1>Urban Grandeur</h1>
        <p>Designing for Tomorrow&apos;s World</p>
      </div>

      <div className="top-container">
        <div className="top-bar">
          <div className="logo">
            <a href="">
              <img src={logo} alt="logo" className="logo-img" />
            </a>
          </div>

          <div className="navbar">
            <nav>
              <ul>
                <div className="nav-left">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </div>
                <div className="nav-right">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>|</li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="img-container">
          <img src={art} alt="art" className="image" />
        </div>

        <p className="text1">LIVING</p>
        <p className="text2">CULTURE</p>
        <p className="text3">CLASS</p>
      </div>
    </div>
  );
};

export default Home;
