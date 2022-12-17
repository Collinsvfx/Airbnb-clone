import React from "react";
import HeroImg from "../images/Group 77.png";

export default function Hero() {
  return (
    <section>
      <div className="hero-img-container">
        <img alt="" src={HeroImg} className="hero-img" />
      </div>
      <div className="hero-text-contents">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
