import { Link } from "react-router-dom";
import logo from "../../ReactAssets/city.png";
import "../Services/services.css";

const Login = () => {
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
        <div className="login-container">
          <div className="login-card">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
