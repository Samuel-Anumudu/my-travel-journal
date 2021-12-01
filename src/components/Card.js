import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  return (
    <div>
      <div className="card__container">
        <img className="image" src={props.data.imageUrl} alt="cardimage" />
        <div className="card__content">
          <div className="location">
            <i className="location-icon">{map}</i>
            <span className="location-header">{props.data.location}</span>
            <a className="location-map" href={props.data.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <div className="desc">
            <h1 className="desc-title">{props.data.title}</h1>
            <h4 className="desc-date">
              {props.data.startDate} - {props.data.endDate}
            </h4>
            <p className="desc-paragraph">{props.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
