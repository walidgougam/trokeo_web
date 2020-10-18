import React, { useState } from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const [image, setImage] = useState([
    {
      picture: "../../asset/images/femme.jpg",
      title: "Poster vos annonces en ligne",
    },
    {
      picture: "../../asset/images/femme.jpg",
      title: "Echanger vos biens et/ou services avec les autres trokeurs",
    },
    {
      picture: "../../asset/images/femme.jpg",
      title: "Convenez par message d’un lieu/horaire pour l’échange",
    },
    {
      picture: "../../asset/images/femme.jpg",
      title: "L’application est 100% gratuite",
    },
    {
      picture: "../../asset/images/femme.jpg",
      title:
        "Vous pouvez également faire un don en consultant les demandes dans la rubrique associations",
    },
  ]);
  return (
    <div className="container_hiw">
      <p className="text_howitworks_hiw">Comment ca marche?</p>
      <div className="wrapper_card_hiw">
        {image.map((img, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={require("../../asset/images/femme.jpg")}
                alt="Logo"
                className="logo_hiw"
              />
              <p className="text_description_picture_hiw">{img.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
