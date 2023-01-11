import React from "react";
import StarImg from "../images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card-holder">
      <div className="card-img">
        <img alt="" src={props.img} />
      </div>
      <div className="the-ratings">
        <img alt="" src={StarImg} />
        <div className="rating-text">
          <p className="fivepz">
            {props.rating}
            <span className="f-stop">
              ({props.reviewCount}) <span className="stopp"> • </span>USA
            </span>
          </p>
        </div>
      </div>
      <div className="prodName-title">
        <h3>{props.title}</h3>
        <p>
          <span className="price">From ${props.price}</span> /{" "}
          <span className="person">person</span>
        </p>
      </div>
    </div>
  );
}
