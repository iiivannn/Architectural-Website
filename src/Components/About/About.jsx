import { Link } from "react-router-dom";
import { useEffect } from "react";

import logo from "../../ReactAssets/city.png";
import about from "../../ReactAssets/about.jpg";
import about_texts from "../../ReactAssets/about-texts.jpg";

import "../Services/services.css";
import "../About/about.css";

import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      duration: 1500,
      delay: 500,
    });

    sr.reveal(".flex-item", {
      interval: 800,
      delay: 800,
      origin: "left",
    });
    sr.reveal(".about-header, .about-image");
  });
  return (
    <div className="body">
      <div className="top-container-service">
        <div className="top-bar">
          <div className="logo">
            <a href="#">
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
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-header">
            <p>Innovative Designs for Modern Architecture</p>
            <h1>About Us</h1>
            <div className="img-wrapper">
              <img src={about} alt="about-image" className="about-img" />
            </div>
          </div>

          <div className="about-container">
            <div className="about-header">
              <p>
                &quot;Our company was established with a mission to blend modern
                design with functionality, creating spaces that not only look
                stunning but also serve the needs of their users. With over a
                decade of experience, we have grown from a small architectural
                firm into a full-fledged e-commerce platform, offering
                customized design solutions, materials, and consultation
                services worldwide.&quot;
              </p>
            </div>

            <div className="about-content">
              <div className="about-text">
                <h2>Our History</h2>
                <p>
                  &quot;Founded in 1999, we began as a passionate team of
                  architects with a dream to reshape urban landscapes. Our
                  journey started with residential projects, expanding into
                  commercial and public architecture as we grew. Over the years,
                  we&apos;ve established a reputation for pushing the boundaries
                  of design and embracing cutting-edge technologies.&quot;
                </p>

                <h2>Our Services</h2>
                <p>
                  &quot;We offer a wide range of services from architectural
                  consultation to complete design-build services. Our e-commerce
                  platform allows customers to easily browse and purchase
                  high-quality building materials and architectural products,
                  tailored to their specific needs.&quot;
                </p>

                <h2>Our Commitment</h2>
                <ul>
                  <li>Customer-Centric Approach</li>
                  <li>Innovative & Sustainable Solutions</li>
                  <li>Premium Quality Materials</li>
                  <li>Professional Expertise</li>
                </ul>
              </div>

              <div className="about-image">
                <img src={about_texts} alt="About Us" />
              </div>
            </div>

            <div className="about-flex-section">
              <h2>Why People Love Us</h2>
              <div className="flex-row">
                <div className="flex-item">
                  <h3>Innovative Design</h3>
                  <p>
                    &quot;We stay ahead of design trends, ensuring that our
                    projects are modern, functional, and visually
                    stunning.&quot;
                  </p>
                </div>
                <div className="flex-item">
                  <h3>Eco-Friendly Approach</h3>
                  <p>
                    &quot;Sustainability is at the heart of our process, from
                    material sourcing to the design and construction
                    phases.&quot;
                  </p>
                </div>
                <div className="flex-item">
                  <h3>Client Satisfaction</h3>
                  <p>
                    &quot;Our client-centric focus ensures that every project
                    meets the needs and exceeds the expectations of those we
                    serve.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
