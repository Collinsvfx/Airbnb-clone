import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/data";

export default function App() {
  const mappedData = Data.map((data) => {
    // console.log(data);
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        key={data.id}
        openSpots={data.openSpots}
      />
    );
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
