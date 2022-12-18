import React from "react";
import ProductPhoto from "../images/image 12.png";
import StarImg from "../images/Star 1.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card-holder">
      <div className="card-img">
        <img alt="" src={ProductPhoto} />
      </div>
      <div className="the-ratings">
        <img alt="" src={StarImg} />
        <div className="rating-text">
          <p className="fivepz">
            5.0{" "}
            <span className="f-stop">
              (6) <span className="stopp"> • </span>USA
            </span>
          </p>
        </div>
      </div>
      <div className="prodName-title">
        <h3>Life lessons with Katie Zaferes</h3>
        <p>
          <span className="price">From $136</span> /{" "}
          <span className="person">person</span>
        </p>
      </div>
    </div>
  );
}
