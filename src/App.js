import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="main-container">
      <div className="for-app">
        <Header />
        <Hero />
        <Card />
      </div>
    </div>
  );
}
