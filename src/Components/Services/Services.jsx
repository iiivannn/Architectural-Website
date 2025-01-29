import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import card1 from "../../ReactAssets/card1.jpg";
import card2 from "../../ReactAssets/card2.jpg";
import card3 from "../../ReactAssets/card3.jpg";
import card4 from "../../ReactAssets/card4.jpg";

import preContent from "../../ReactAssets/pre-content.jpg";
import mainService from "../../ReactAssets/main-service.jpg";
import serviceItem from "../../ReactAssets/service-items.jpg";

import logo from "../../ReactAssets/city.png";

import ScrollReveal from "scrollreveal";
import Marquee from "react-fast-marquee";

import "./services.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { EffectCreative, Pagination } from "swiper/modules";

const Services = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      duration: 1500,
      delay: 500,
    });

    sr.reveal(".cards");
    sr.reveal(".text-title, .text", { interval: 500, origin: "right" });
    sr.reveal(".img-preCon, .text-btn", { delay: 500, origin: "left" });
    sr.reveal(".serviceItem");
    sr.reveal(".service-item", {
      duration: 3000,
      delay: 800,
      origin: "left",
      interval: 500,
    });
    sr.reveal(".small-heading, .big-heading", { interval: 500 });

    return () => sr.destroy();
  }, []);

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
      <div className="animate-wrapper">
        <div className="text-animate">
          <img
            src={mainService}
            alt="interior-design"
            className="mainService"
          />
          <Marquee className="marquee" speed={60}>
            <p className="marquee-title">Urban Grandeur</p>
          </Marquee>
        </div>
      </div>

      <div className="preContent-wrapper">
        <div className="preContent">
          <div className="preContent-left">
            <p className="text-title">
              Our company is focused towards enduring, unifying, and inviting
              architectural designs.
            </p>
            <img
              src={preContent}
              alt="architecture-image"
              className="img-preCon"
            />
          </div>

          <div className="preContent-right">
            <p className="text">
              We focus on sustainable practices, creating spaces that are
              environmentally friendly and cost-effective in the long run. Our
              diverse portfolio showcases our versatility in handling projects
              of all sizes and complexities, providing you with the confidence
              that we can bring your ideas to life, no matter the challenge.
              With access to cutting-edge technology and design tools, we ensure
              efficient project delivery and stunning results.
            </p>

            <p className="text-btn">Work With Us.</p>
          </div>
        </div>
      </div>

      <div className="services-content">
        <div className="items-wrapper">
          <div className="heading">
            <p className="small-heading">
              Structured, Adaptive, and Smart Architectural Designs.
            </p>
            <p className="big-heading">Service</p>
          </div>

          <div className="service-item">
            <h2>Design Development</h2>
            <p>
              Bring your vision to life with our expert design development
              process! From initial sketches to detailed plans, we refine every
              aspect of your project, ensuring it not only looks stunning but
              also functions perfectly. With an eye for detail and innovation,
              we craft spaces that blend form, function, and beauty seamlessly.
            </p>
          </div>

          <div className="service-item">
            <h2>Quality Control</h2>
            <p>
              Experience craftsmanship at its finest! Our quality control
              process guarantees that every stage of your project meets the
              highest standards. From materials selection to construction
              inspections, we ensure excellence at every turn, giving you peace
              of mind with a finished product built to last.
            </p>
          </div>

          <div className="service-item">
            <h2>Site Landscaping Design</h2>
            <p>
              Transform your surroundings with our custom landscaping design! We
              combine natural elements with architectural finesse to create
              outdoor spaces that are not only beautiful but practical and
              sustainable. Whether its lush gardens, sleek pathways, or dynamic
              outdoor features, we design landscapes that enhance the living
              experience.
            </p>
          </div>

          <div className="service-item">
            <h2>Environmental Integration</h2>
            <p>
              Embrace sustainable design with our eco-conscious approach to
              architecture! We integrate buildings into their natural
              environment, using green materials and energy-efficient techniques
              that reduce the ecological footprint. Our environmentally
              integrated designs strike the perfect balance between cutting-edge
              architecture and the beauty of nature.
            </p>
          </div>
        </div>
        <img
          src={serviceItem}
          alt="service-item-image"
          className="serviceItem"
        />
      </div>

      <div className="cards">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination]}
          className="mySwiper"
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={card3} alt="card3" className="img-card" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card2} alt="card2" className="img-card" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card1} alt="card1" className="img-card" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card4} alt="card4" className="img-card" />
          </SwiperSlide>
        </Swiper>

        <div className="card-text">
          <p>Presenting bona fide creations of tomorrow.</p>
          <h2>Explore our designs</h2>
          <p>We create architecture of class.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
