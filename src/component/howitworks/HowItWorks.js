import React, { useState } from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const [image, setImage] = useState([
    { picture: "../../asset/images/femme.jpg", title: "ceci est un titre" },
    { picture: "../../asset/images/femme.jpg", title: "ceci est un titre" },
    { picture: "../../asset/images/femme.jpg", title: "ceci est un titre" },
    { picture: "../../asset/images/femme.jpg", title: "ceci est un titre" },
    { picture: "../../asset/images/femme.jpg", title: "ceci est un titre" },
  ]);
  return (
    <>
      <p>Comment ca marche?</p>
      {image.map((img, index) => {
        return (
          <div>
            <img
              src={require("../../asset/images/femme.jpg")}
              alt="Logo"
              className="logo_hiw"
            />
            <p>{img.title}</p>
          </div>
        );
      })}
    </>
  );
}
