import React from "react";
import "./styles.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import data from "./data";

const App = () => {
  const dataResult = data.map((item) => {
    return (
      <div>
        <Card data={item} />
        <hr
          style={{
            width: "90%",
            backgroundColor: "#918e9b",
            border: "none",
            height: "2px",
            opacity: "0.1",
          }}
        />
      </div>
    );
  });
  return (
    <div>
      <Header />
      {dataResult}
    </div>
  );
};

export default App;
