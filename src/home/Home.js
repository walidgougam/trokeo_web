import React from "react";
import "./Home.css";
import Header from "../header/Header";
import HowItWorks from "../component/howitworks/HowItWorks";

export default function Home() {
  return (
    <div>
      <Header />
      <img
        src={require("../asset/images/femme.jpg")}
        alt="Logo"
        className="image_home"
      />
      <HowItWorks />
    </div>
  );
}
