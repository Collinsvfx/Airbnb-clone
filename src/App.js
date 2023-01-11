import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ProductPhoto from "./images/image 12.png";

export default function App() {
  return (
    <div className="main-container">
      <div className="for-app">
        <Header />
        <Hero />
        <Card
          img={ProductPhoto}
          rating="5.0"
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>
  );
}
