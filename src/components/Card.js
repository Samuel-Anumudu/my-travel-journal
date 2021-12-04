import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  return (
    <div>
      <section className="section-two">
        <div className="container section-two--row">
          <div className="section-two--col">
            <img
              className="section-two--image"
              src={props.data.imageUrl}
              alt=""
            />
          </div>
          <div className="section-two--col">
            <div className="location">
              <i className="location-icon location-item">{map}</i>
              <h2 className="location-title location-item">
                {props.data.location}
              </h2>
              <a
                className="location-link location-item"
                href={props.data.googleMapsUrl}
              >
                View on Google Maps
              </a>
            </div>
            <div className="desc">
              <h1 className="section-two--title">{props.data.title}</h1>
              <h3 className="section-two--date">
                {props.data.startDate} - {props.data.endDate}
              </h3>
              <p className="section-two--paragraph">{props.data.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
