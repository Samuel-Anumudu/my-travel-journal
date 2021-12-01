import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const icon = <FontAwesomeIcon icon={faGlobeAfrica} />;
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <span className="globe">{icon}</span>
          <h3 className="title">my travel journal.</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
