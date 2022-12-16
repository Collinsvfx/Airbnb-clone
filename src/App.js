import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="main-container">
      <div className="for-app">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
