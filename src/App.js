import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/data";

export default function App() {
  const mappedData = Data.map((data) => {
    // console.log(data);
    return <Card key={data.id} {...data} />;
  });
  // console.log(mappedData);
  return (
    <div className="main-container">
      <div className="for-app">
        <Header />
        <Hero />
        <div className="slider">{mappedData}</div>
      </div>
    </div>
  );
}
