import { Link } from "react-router-dom";
import logo from "../../ReactAssets/city.png";
import "../Services/services.css";
import contact from "../../ReactAssets/contact.jpg";
import "../Contact/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="top-container-service">
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

      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Let&apos;s Build Your Idea!</h2>
          <div className="form-container">
            <img src={contact} alt="contact-image" />
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here..."
              />

              <label htmlFor="query">Query</label>
              <textarea
                className="query"
                id="query"
                name="query"
                placeholder="Place your query here..."
              />

              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
