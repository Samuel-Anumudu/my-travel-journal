import React from "react";
import "./styles.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";

const data = {
  title: "Lagos Island",
  location: "Nigeria",
  googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
  startDate: "12 Jan, 2019",
  endDate: "24 Sept, 2019",
  description:
    "Lagos, Nigeria’s largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon. Victoria Island, the financial center of the metropolis, is known for its beach resorts, boutiques and nightlife.",
  imageUrl:
    "https://images.unsplash.com/photo-1618828665347-d870c38c95c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
};

const App = () => {
  return (
    <div>
      <Header />
      <Card data={data} />
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
};

export default App;
