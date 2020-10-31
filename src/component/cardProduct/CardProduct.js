import React from "react";
import "./CardProduct.css";
import { ReactComponent as IconLocation } from "../../asset/allSvg/icon_location.svg";

export default function CardProduct() {
  return (
    <div className="container_cardproduct">
      <img
        src={require("../../asset/allSvg/shave.jpg")}
        alt="product_image"
        className="image_product_cardproduct"
      />
      <p
        style={{
          backgroundColor: "#5F5F5F",
          width: 168,
          height: 29,
          borderRadius: 5,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          color: "white",
          fontSize: 11,
          fontFamily: "Avenir Medium",
        }}
      >
        Réservé
      </p>
      <p className="title_product_cardproduct">after shave</p>
      <div>
        <IconLocation />
        <span>km</span>
      </div>
    </div>
  );
}
