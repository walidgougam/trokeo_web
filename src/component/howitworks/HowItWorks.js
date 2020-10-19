import React, { useState } from "react";
import "./HowItWorks.css";
import { ReactComponent as PeopleHeart } from "../../asset/allSvg/people_heart_image.svg";

export default function HowItWorks() {
  const [image, setImage] = useState([
    {
      picture: <PeopleHeart />,
      title: "Poster vos annonces en ligne",
    },
    {
      picture: <PeopleHeart />,
      title: "Echanger vos biens et/ou services avec les autres trokeurs",
    },
    {
      picture: <PeopleHeart />,
      title: "Convenez par message d’un lieu/horaire pour l’échange",
    },
    {
      picture: <PeopleHeart />,
      title: "L’application est 100% gratuite",
    },
    {
      picture: <PeopleHeart />,
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
              <div
                style={{
                  backgroundColor: "white",
                  padding: "9px 4px",
                  borderRadius: "5px",
                }}
              >
                {img.picture}
              </div>
              <p className="text_description_picture_hiw">{img.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
