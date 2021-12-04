import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const icon = <FontAwesomeIcon icon={faGlobeAfrica} />;
  return (
    <div>
      <section className="intro">
        <div className="container intro-row">
          <div className="intro-col">
            <i className="world-icon">{icon}</i>
          </div>
          <div className="intro-col">
            <h2>My travel journal</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
