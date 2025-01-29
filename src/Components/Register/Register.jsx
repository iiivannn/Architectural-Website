import { Link } from "react-router-dom";
import logo from "../../ReactAssets/city.png";
import "../Services/services.css";

const Register = () => {
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

      <div className="wrapper">
        <div className="register-container">
          <div className="register-card">
            <h2>Register</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
