import React from "react";
import starImg from "../images/Star 1.png";

export default function Card(props) {
  // console.log(props.data.openSpots);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.openSpots > 0 && props.openSpots !== "") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-holder">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="card-img">
        <img alt="" src={props.coverImg} />
      </div>
      <div className="the-ratings">
        <img alt="" src={starImg} />
        <div className="rating-text">
          <p className="fivepz">
            {props.stats.rating}
            <span className="f-stop">
              ({props.stats.reviewCount}) <span className="stopp"> • </span>USA
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
